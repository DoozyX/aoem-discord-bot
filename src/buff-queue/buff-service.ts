import { Client, Colors, Guild, GuildMember, Role, TextChannel } from 'discord.js';
import { DateTime } from 'luxon';

import { Api } from '@app/api';
import { CreateBuffDtoTypeEnum } from '@app/api_gen/models/CreateBuffDto';
import { CreateChannelDtoTypeEnum } from '@app/api_gen/models/CreateChannelDto';
import { BuffType } from '@app/buff-queue/enums';

export class BuffService {
    private lastExtra: string | undefined;
    private lastAssignedMember: string | undefined;
    private buffReminders: Map<BuffType, NodeJS.Timeout> = new Map();

    private readonly buffRole = 'Buff Admin';

    constructor(
        private api: Api,
        private client: Client
    ) {}

    public async registerGuild(id: string, name: string): Promise<void> {
        await this.api.guilds.guildsControllerCreateV1({ uid: id, name });

        const guild = await this.client.guilds.fetch(id);
        await createRoleIfNotExists(guild, this.buffRole);
    }

    public async registerChannel(
        guildId: string,
        buffType: BuffType,
        channelId: string
    ): Promise<void> {
        await this.api.channels.channelsControllerCreateV1({
            guildUid: guildId,
            type: buffType as unknown as CreateChannelDtoTypeEnum,
            uid: channelId,
        });

        await this.refreshQueue(guildId, buffType);
    }

    public async requestBuff(guildId: string, buffType: BuffType, member: string): Promise<void> {
        await this.api.buffs.buffsControllerCreateV1({
            guildUid: guildId,
            type: buffType as unknown as CreateBuffDtoTypeEnum,
            member: member,
        });

        await this.refreshQueue(guildId, buffType);
    }

    public async assignBuffMemberAt(
        guildId: string,
        member: GuildMember,
        buffType: BuffType,
        position: number
    ): Promise<void> {
        if (!userHasRole(member, this.buffRole)) {
            throw new Error(
                'Not allowed to use this command, only member with Buff Admin can use it'
            );
        }

        const previousMemberMessage = this.lastAssignedMember
            ? ` from <@${this.lastAssignedMember}>`
            : '';

        const buff = await this.api.buffs.buffsControllerRemoveAtV1(guildId, buffType, position);

        this.lastAssignedMember = buff.member;

        const currentTime = DateTime.utc().toFormat('yyyy-MM-dd HH:mm:ss');

        await this.refreshQueue(
            guildId,
            buffType,
            `Assigned buff to <@${buff.member}>${previousMemberMessage} at ${currentTime} UTC by <@${member.id}>`
        );

        if (this.buffReminders.has(buffType)) {
            const timeout = this.buffReminders.get(buffType);
            if (timeout) {
                clearTimeout(timeout);
            }
        }

        const timeout = setTimeout(
            async () => {
                // const channel = await this.getBuffTextChannel(guildId, buffType);
                // await channel.send(`${buffType} expires in 15 minutes.`);

                const guild = await this.client.guilds.fetch(guildId);

                const role = guild.roles.cache.find(r => r.name === this.buffRole);
                if (!role) {
                    console.error('invalid buff role');
                    return;
                }

                const membersWithRole = role.members;

                // eslint-disable-next-line unicorn/no-array-for-each
                membersWithRole.forEach(async (member: GuildMember) => {
                    try {
                        await member.send(
                            `Hello ${member.displayName}, this is a message for members with the '${this.buffRole}' role. ${buffType} buff can be assigned again in 15mins.`
                        );
                        console.log(`Sent DM to: ${member.displayName}`);
                    } catch (error) {
                        console.error(`Couldn't DM ${member.displayName}: ${error}`);
                    }
                });

                this.buffReminders.delete(buffType);
            },
            45 * 60 * 1000
        );
        this.buffReminders.set(buffType, timeout);
    }

    async removeBuffMember(
        guildId: string,
        member: GuildMember,
        buffType: BuffType,
        position: number
    ): Promise<void> {
        if (!userHasRole(member, this.buffRole)) {
            throw new Error(
                'Not allowed to use this command, only member with Buff Admin can use it'
            );
        }

        await this.api.buffs.buffsControllerRemoveAtV1(guildId, buffType, position);

        await this.refreshQueue(guildId, buffType);
    }

    public async getBuffChannel(guildId: string, buffType: BuffType): Promise<string> {
        const response = await this.api.channels.channelsControllerFindOneV1(guildId, buffType);
        if (!response) {
            throw new Error('Could not find channel ' + guildId);
        }
        return response.uid;
    }

    public async refreshQueue(guildId: string, buffType: BuffType, extra?: string): Promise<void> {
        this.lastExtra = extra ?? this.lastExtra;

        const channel = await this.getBuffTextChannel(guildId, buffType);

        const messages = await channel.messages.fetch({ limit: 100 });
        const firstMessage = messages.first();

        const memberQueue = await this.getBuffMemberQueue(guildId, buffType);
        const queue = memberQueue.map((member, index) => `${index}. <@${member}>`).join('\n');
        const queueMessage =
            queue.length === 0 ? '# **Empty Queue**' : `# **Buff Queue**\n\n${queue}`;

        const message = this.lastExtra ? `${queueMessage}\n\n\n${this.lastExtra}` : queueMessage;
        if (messages.size > 1 || firstMessage?.author.id !== this.client.user?.id) {
            await this.deleteAllMessages(channel);
            await channel.send(message);
        } else {
            firstMessage?.edit(message);
        }
    }

    private async getBuffMemberQueue(guildId: string, buffType: BuffType): Promise<string[]> {
        const buffsQueue = await this.api.buffs.buffsControllerFindAllV1(guildId, buffType);
        return buffsQueue.map(buff => buff.member);
    }

    private async getBuffTextChannel(guildId: string, buffType: BuffType): Promise<TextChannel> {
        const bufChannelId = await this.getBuffChannel(guildId, buffType);

        return await this.getTextChannel(bufChannelId);
    }

    private async getTextChannel(id: string): Promise<TextChannel> {
        const channel = await this.client.channels.fetch(id);
        if (!channel) {
            throw new Error('No channel found for guild');
        }
        return channel as TextChannel;
    }

    // TODO: move out
    private async deleteAllMessages(channel: TextChannel): Promise<void> {
        let deletedCount = 0;

        while (true) {
            // Step 1: Fetch up to 100 messages
            const messages = await channel.messages.fetch({ limit: 100 });

            // If no more messages, exit the loop
            if (messages.size === 0) {
                console.log('No more messages to delete.');
                break;
            }

            const days14Timestamp = 14 * 24 * 60 * 60 * 1000;
            // Step 2: Bulk delete messages younger than 14 days
            const recentMessages = messages.filter(
                message => Date.now() - message.createdTimestamp < days14Timestamp
            );

            if (recentMessages.size > 0) {
                await channel.bulkDelete(recentMessages, true);
                deletedCount += recentMessages.size;
                console.log(`Deleted ${recentMessages.size} recent messages.`);
            }

            // Step 3: Handle older messages (more than 14 days old)
            const oldMessages = messages.filter(
                message => Date.now() - message.createdTimestamp >= days14Timestamp
            );

            for (const message of oldMessages.values()) {
                try {
                    await message.delete();
                    deletedCount += 1;
                    console.log(`Deleted an old message ID: ${message.id}`);
                } catch (error) {
                    console.error(`Failed to delete old message ID: ${message.id}`, error);
                }
            }
        }

        console.log(`Total messages deleted: ${deletedCount}`);
    }
}

async function createRoleIfNotExists(guild: Guild, roleName: string): Promise<Role> {
    let role = guild.roles.cache.find(r => r.name === roleName);

    if (role) {
        return role;
    }

    // If role doesn't exist, create it
    role = await guild.roles.create({
        name: roleName,
        color: Colors.Green,
        permissions: [],
        reason: `Role for ${roleName}`,
    });

    return role;
}

export function userHasRole(member: GuildMember, roleName: string): boolean {
    const role = member.guild.roles.cache.find(role => role.name === roleName);

    if (!role) {
        return false;
    }

    return member.roles.cache.has(role.id);
}

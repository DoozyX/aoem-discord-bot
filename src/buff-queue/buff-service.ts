import { Client, TextChannel } from 'discord.js';

import { Api } from '@app/api';
import { BuffTypeEnum } from '@app/api_gen/models/Buff';
import { CreateBuffDtoTypeEnum } from '@app/api_gen/models/CreateBuffDto';
import { CreateChannelDtoTypeEnum } from '@app/api_gen/models/CreateChannelDto';
import { BuffType } from '@app/buff-queue/enums';

export interface Buff {
    member: string;
}

export class BuffService {
    constructor(
        private api: Api,
        private client: Client
    ) {}

    public async registerGuild(id: string, name: string): Promise<void> {
        await this.api.guilds.guildsControllerCreate({ uid: id, name });
    }

    public async registerChannel(
        guildId: string,
        buffType: BuffType,
        channelId: string
    ): Promise<void> {
        await this.api.channels.channelsControllerCreate({
            guildUid: guildId,
            type: buffType as unknown as CreateChannelDtoTypeEnum,
            uid: channelId,
        });
    }

    public async requestBuff(guildId: string, buffType: BuffType, member: string): Promise<void> {
        await this.api.buffs.buffsControllerCreate({
            guildUid: guildId,
            type: buffType as unknown as CreateBuffDtoTypeEnum,
            member: member,
        });
    }

    public async getBuffChannel(guildId: string, buffType: BuffType): Promise<string> {
        const response = await this.api.channels.channelsControllerFindOne(guildId, buffType);
        if (!response) {
            throw new Error('Could not find channel ' + guildId);
        }
        return response.uid;
    }

    public async getBuffMemberQueue(guildId: string, buffType: BuffType): Promise<string[]> {
        const buffsQueue = await this.api.buffs.buffsControllerFindAll(guildId, buffType);
        return buffsQueue.map(buff => buff.member);
    }

    async updateQueue(client: Client, guildId: string, buffType: BuffType): Promise<void> {
        const bufChannelId = await this.getBuffChannel(guildId, buffType);

        const textChannel = await this.getTextChannel(client, bufChannelId);

        await this.deleteAllMessages(textChannel);

        const memberQueue = await this.getBuffMemberQueue(guildId, buffType);

        const message = memberQueue.map((member, index) => `${index}. ${member}`).join('\n');

        // Send a message
        await textChannel.send(message);
    }

    async getTextChannel(client: Client, id: string): Promise<TextChannel> {
        const channel = await client.channels.fetch(id);
        if (!channel) {
            throw new Error('No channel found for guild');
        }
        return channel as TextChannel;
    }

    // TODO: move out
    async deleteAllMessages(channel: TextChannel): Promise<void> {
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

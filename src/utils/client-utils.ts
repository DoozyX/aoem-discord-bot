import {
    ApplicationCommand,
    Channel,
    Client,
    DiscordAPIError,
    RESTJSONErrorCodes as DiscordApiErrors,
    Guild,
    GuildMember,
    Locale,
    NewsChannel,
    Role,
    StageChannel,
    TextChannel,
    User,
    VoiceChannel,
} from 'discord.js';

import { IntlService } from '@app/intl';

import { PermissionUtils, RegexUtils } from '.';

const FETCH_MEMBER_LIMIT = 20;
const IGNORED_ERRORS = new Set([
    DiscordApiErrors.UnknownMessage,
    DiscordApiErrors.UnknownChannel,
    DiscordApiErrors.UnknownGuild,
    DiscordApiErrors.UnknownMember,
    DiscordApiErrors.UnknownUser,
    DiscordApiErrors.UnknownInteraction,
    DiscordApiErrors.MissingAccess,
]);

export class ClientUtils {
    public static async getGuild(client: Client, discordId: string): Promise<Guild | null> {
        const matchedDiscordId = RegexUtils.discordId(discordId);
        if (!matchedDiscordId) {
            return null;
        }

        try {
            return await client.guilds.fetch(matchedDiscordId);
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return null;
            } else {
                throw error;
            }
        }
    }

    public static async getChannel(client: Client, discordId: string): Promise<Channel | null> {
        const matchedDiscordId = RegexUtils.discordId(discordId);
        if (!matchedDiscordId) {
            return null;
        }

        try {
            return await client.channels.fetch(matchedDiscordId);
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return null;
            } else {
                throw error;
            }
        }
    }

    public static async getUser(client: Client, discordId: string): Promise<User | null> {
        const matchedDiscordId = RegexUtils.discordId(discordId);
        if (!matchedDiscordId) {
            return null;
        }

        try {
            return await client.users.fetch(matchedDiscordId);
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return null;
            } else {
                throw error;
            }
        }
    }

    public static async findAppCommand(
        client: Client,
        name: string
    ): Promise<ApplicationCommand | null> {
        let commands = await client.application?.commands.fetch();
        return commands?.find(command => command.name === name) ?? null;
    }

    public static async findMember(guild: Guild, input: string): Promise<GuildMember | undefined> {
        try {
            let discordId = RegexUtils.discordId(input);
            if (discordId) {
                return await guild.members.fetch(discordId);
            }

            let tag = RegexUtils.tag(input);
            if (tag) {
                const members = await guild.members.fetch({
                    query: tag.username,
                    limit: FETCH_MEMBER_LIMIT,
                });
                return members.find(member => member.user.discriminator === tag.discriminator);
            }

            const members = await guild.members.fetch({ query: input, limit: 1 });
            return members.first();
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return undefined;
            } else {
                throw error;
            }
        }
    }

    public static async findRole(guild: Guild, input: string): Promise<Role | null> {
        try {
            let discordId = RegexUtils.discordId(input);
            if (discordId) {
                return await guild.roles.fetch(discordId);
            }

            let search = input.trim().toLowerCase().replace(/^@app/, '');
            let roles = await guild.roles.fetch();
            return (
                roles.find(role => role.name.toLowerCase() === search) ??
                roles.find(role => role.name.toLowerCase().includes(search)) ??
                null
            );
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return null;
            } else {
                throw error;
            }
        }
    }

    public static async findTextChannel(
        guild: Guild,
        input: string
    ): Promise<NewsChannel | TextChannel | undefined> {
        try {
            let discordId = RegexUtils.discordId(input);
            if (discordId) {
                let channel = await guild.channels.fetch(discordId);
                return channel instanceof NewsChannel || channel instanceof TextChannel
                    ? channel
                    : undefined;
            }

            let search = input.trim().toLowerCase().replace(/^#/, '').replaceAll(' ', '-');
            let fetchedChannels = await guild.channels.fetch();
            let channels = [...fetchedChannels.values()].filter(
                channel => channel instanceof NewsChannel || channel instanceof TextChannel
            );
            return (
                channels.find(channel => channel.name.toLowerCase() === search) ??
                channels.find(channel => channel.name.toLowerCase().includes(search))
            );
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return undefined;
            } else {
                throw error;
            }
        }
    }

    public static async findVoiceChannel(
        guild: Guild,
        input: string
    ): Promise<VoiceChannel | StageChannel | undefined> {
        try {
            let discordId = RegexUtils.discordId(input);
            if (discordId) {
                let channel = await guild.channels.fetch(discordId);
                return channel instanceof VoiceChannel || channel instanceof StageChannel
                    ? channel
                    : undefined;
            }

            let search = input.trim().toLowerCase().replace(/^#/, '');
            let fetchedChannels = await guild.channels.fetch();
            let channels = [...fetchedChannels.values()].filter(
                channel => channel instanceof VoiceChannel || channel instanceof StageChannel
            );
            return (
                channels.find(channel => channel.name.toLowerCase() === search) ??
                channels.find(channel => channel.name.toLowerCase().includes(search))
            );
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return undefined;
            } else {
                throw error;
            }
        }
    }

    public static async findNotifyChannel(
        guild: Guild,
        langCode: Locale
    ): Promise<TextChannel | NewsChannel | undefined> {
        // Prefer the system channel
        let systemChannel = guild.systemChannel;
        if (systemChannel && PermissionUtils.canSend(systemChannel, true)) {
            return systemChannel;
        }

        // Otherwise look for a bot channel
        const channels = await guild.channels.fetch();
        return [...channels.values()].find(
            (channel): channel is TextChannel | NewsChannel =>
                (channel instanceof TextChannel || channel instanceof NewsChannel) &&
                PermissionUtils.canSend(channel, true) &&
                IntlService.getRegex('channelRegexes.bot', langCode).test(channel.name)
        );
    }
}

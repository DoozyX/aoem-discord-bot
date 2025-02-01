import {
    BaseMessageOptions,
    DiscordAPIError,
    RESTJSONErrorCodes as DiscordApiErrors,
    EmbedBuilder,
    EmojiResolvable,
    Message,
    MessageEditOptions,
    MessageReaction,
    PartialGroupDMChannel,
    StartThreadOptions,
    TextBasedChannel,
    ThreadChannel,
    User,
} from 'discord.js';

const IGNORED_ERRORS = new Set([
    DiscordApiErrors.UnknownMessage,
    DiscordApiErrors.UnknownChannel,
    DiscordApiErrors.UnknownGuild,
    DiscordApiErrors.UnknownUser,
    DiscordApiErrors.UnknownInteraction,
    DiscordApiErrors.CannotSendMessagesToThisUser, // User blocked bot or DM disabled
    DiscordApiErrors.ReactionWasBlocked, // User blocked bot or DM disabled
    DiscordApiErrors.MaximumActiveThreads,
]);

export class MessageUtils {
    public static async send(
        target: User | TextBasedChannel,
        content: string | EmbedBuilder | BaseMessageOptions
    ): Promise<Message> {
        if (target instanceof PartialGroupDMChannel) return;
        try {
            let options: BaseMessageOptions =
                typeof content === 'string'
                    ? { content }
                    : (content instanceof EmbedBuilder
                      ? { embeds: [content] }
                      : content);
            return await target.send(options);
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return;
            } else {
                throw error;
            }
        }
    }

    public static async reply(
        message: Message,
        content: string | EmbedBuilder | BaseMessageOptions
    ): Promise<Message> {
        try {
            let options: BaseMessageOptions =
                typeof content === 'string'
                    ? { content }
                    : (content instanceof EmbedBuilder
                      ? { embeds: [content] }
                      : content);
            return await message.reply(options);
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return;
            } else {
                throw error;
            }
        }
    }

    public static async edit(
        message: Message,
        content: string | EmbedBuilder | MessageEditOptions
    ): Promise<Message> {
        try {
            let options: MessageEditOptions =
                typeof content === 'string'
                    ? { content }
                    : (content instanceof EmbedBuilder
                      ? { embeds: [content] }
                      : content);
            return await message.edit(options);
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return;
            } else {
                throw error;
            }
        }
    }

    public static async react(message: Message, emoji: EmojiResolvable): Promise<MessageReaction> {
        try {
            return await message.react(emoji);
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return;
            } else {
                throw error;
            }
        }
    }

    public static async pin(message: Message, pinned: boolean = true): Promise<Message> {
        try {
            return pinned ? await message.pin() : await message.unpin();
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return;
            } else {
                throw error;
            }
        }
    }

    public static async startThread(
        message: Message,
        options: StartThreadOptions
    ): Promise<ThreadChannel> {
        try {
            return await message.startThread(options);
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return;
            } else {
                throw error;
            }
        }
    }

    public static async delete(message: Message): Promise<Message> {
        try {
            return await message.delete();
        } catch (error) {
            if (
                error instanceof DiscordAPIError &&
                typeof error.code == 'number' &&
                IGNORED_ERRORS.has(error.code)
            ) {
                return;
            } else {
                throw error;
            }
        }
    }
}

import {
    DiscordAPIError,
    RESTJSONErrorCodes as DiscordApiErrors,
    Message,
    MessageReaction,
    PartialMessage,
    PartialMessageReaction,
    PartialUser,
    User,
} from 'discord.js';

const IGNORED_ERRORS = new Set([
    DiscordApiErrors.UnknownMessage,
    DiscordApiErrors.UnknownChannel,
    DiscordApiErrors.UnknownGuild,
    DiscordApiErrors.UnknownUser,
    DiscordApiErrors.UnknownInteraction,
    DiscordApiErrors.MissingAccess,
]);

export class PartialUtils {
    public static async fillUser(user: User | PartialUser): Promise<User> {
        if (user.partial) {
            try {
                return await user.fetch();
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

        return user as User;
    }

    public static async fillMessage(message: Message | PartialMessage): Promise<Message> {
        if (message.partial) {
            try {
                return await message.fetch();
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

        return message as Message;
    }

    public static async fillReaction(
        messageReaction: MessageReaction | PartialMessageReaction
    ): Promise<MessageReaction> {
        if (messageReaction.partial) {
            try {
                messageReaction = await messageReaction.fetch();
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

        messageReaction.message = await this.fillMessage(messageReaction.message);
        if (!messageReaction.message) {
            return;
        }

        return messageReaction as MessageReaction;
    }
}

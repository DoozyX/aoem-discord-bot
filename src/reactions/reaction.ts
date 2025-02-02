import { Message, MessageReaction, User } from 'discord.js';

import { EventData } from '@app/models/internal-models';

export interface Reaction {
    emoji: string;
    requireGuild: boolean;
    requireSentByClient: boolean;
    requireEmbedAuthorTag: boolean;

    execute(
        messageReaction: MessageReaction,
        message: Message,
        reactor: User,
        data: EventData
    ): Promise<void>;
}

import { ButtonInteraction } from 'discord.js';

import { EventData } from '@app/models/internal-models';

export interface Button {
    ids: string[];
    deferType: ButtonDeferType;
    requireGuild: boolean;
    requireEmbedAuthorTag: boolean;

    execute(intr: ButtonInteraction, data: EventData): Promise<void>;
}

export enum ButtonDeferType {
    REPLY = 'REPLY',
    UPDATE = 'UPDATE',
    NONE = 'NONE',
}

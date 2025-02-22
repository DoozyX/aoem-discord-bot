import { Message } from 'discord.js';

import { EventData } from '@app/models/internal-models';

export interface Trigger {
    requireGuild: boolean;

    triggered(message: Message): boolean;

    execute(message: Message, data: EventData): Promise<void>;
}

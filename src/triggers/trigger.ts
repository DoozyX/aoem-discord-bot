import { Message } from 'discord.js';

import { EventData } from '../models/internal-models.js';

export interface Trigger {
    requireGuild: boolean;
    triggered(message: Message): boolean;
    execute(message: Message, data: EventData): Promise<void>;
}

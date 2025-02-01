import { Message } from 'discord.js';

import { EventHandler, TriggerHandler } from '.';

export class MessageHandler implements EventHandler {
    constructor(private triggerHandler: TriggerHandler) {}

    public async process(message: Message): Promise<void> {
        // Don't respond to system messages or self
        if (message.system || message.author.id === message.client.user?.id) {
            return;
        }

        // Process trigger
        await this.triggerHandler.process(message);
    }
}

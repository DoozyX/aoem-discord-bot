import { Message } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { Config } from '@app/config';
import { EventDataService } from '@app/services';
import { Trigger } from '@app/triggers';

export class TriggerHandler {
    private rateLimiter = new RateLimiter(
        Config.rateLimiting.triggers.amount,
        Config.rateLimiting.triggers.interval * 1000
    );

    constructor(
        private triggers: Trigger[],
        private eventDataService: EventDataService
    ) {}

    public async process(message: Message): Promise<void> {
        // Check if user is rate limited
        let limited = this.rateLimiter.take(message.author.id);
        if (limited) {
            return;
        }

        // Find triggers caused by this message
        let triggers = this.triggers.filter(trigger => {
            if (trigger.requireGuild && !message.guild) {
                return false;
            }

            return trigger.triggered(message);
        });

        // If this message causes no triggers then return
        if (triggers.length === 0) {
            return;
        }

        // Get data from database
        let data = await this.eventDataService.create({
            user: message.author,
            channel: message.channel,
            guild: message.guild,
        });

        // Execute triggers
        for (let trigger of triggers) {
            await trigger.execute(message, data);
        }
    }
}

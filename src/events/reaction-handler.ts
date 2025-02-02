import { Message, MessageReaction, User } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { Config } from '@app/config';
import { Reaction } from '@app/reactions';
import { EventDataService } from '@app/services';

import { EventHandler } from '.';

export class ReactionHandler implements EventHandler {
    private rateLimiter = new RateLimiter(
        Config.rateLimiting.reactions.amount,
        Config.rateLimiting.reactions.interval * 1000
    );

    constructor(
        private reactions: Reaction[],
        private eventDataService: EventDataService
    ) {}

    public async process(
        messageReaction: MessageReaction,
        message: Message,
        reactor: User
    ): Promise<void> {
        // Don't respond to self, or other bots
        if (reactor.id === messageReaction.client.user?.id || reactor.bot) {
            return;
        }

        // Check if user is rate limited
        let limited = this.rateLimiter.take(message.author.id);
        if (limited) {
            return;
        }

        // Try to find the reaction the user wants
        let reaction = this.findReaction(messageReaction.emoji.name);
        if (!reaction) {
            return;
        }

        if (reaction.requireGuild && !message.guild) {
            return;
        }

        if (reaction.requireSentByClient && message.author.id !== message.client.user?.id) {
            return;
        }

        // Check if the embeds author equals the reactors tag
        if (reaction.requireEmbedAuthorTag && message.embeds[0]?.author?.name !== reactor.tag) {
            return;
        }

        // Get data from database
        let data = await this.eventDataService.create({
            user: reactor,
            channel: message.channel,
            guild: message.guild,
        });

        // Execute the reaction
        await reaction.execute(messageReaction, message, reactor, data);
    }

    private findReaction(emoji: string): Reaction {
        return this.reactions.find(reaction => reaction.emoji === emoji);
    }
}

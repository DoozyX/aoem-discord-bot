import {
    AutocompleteInteraction,
    ButtonInteraction,
    Client,
    CommandInteraction,
    Events,
    Guild,
    Interaction,
    Message,
    MessageReaction,
    PartialMessageReaction,
    PartialUser,
    RateLimitData,
    RESTEvents,
    User,
} from 'discord.js';
import { createRequire } from 'node:module';

import {
    ButtonHandler,
    CommandHandler,
    GuildJoinHandler,
    GuildLeaveHandler,
    MessageHandler,
    ReactionHandler,
} from '../events';
import { JobService, Logger } from '../services';
import { PartialUtils } from '../utils';

const require = createRequire(import.meta.url);
let Config = require('../../config/config.json');
let Debug = require('../../config/debug.json');
let Logs = require('../../lang/logs.json');

export class Bot {
    private ready = false;

    constructor(
        private token: string,
        private client: Client,
        private guildJoinHandler: GuildJoinHandler,
        private guildLeaveHandler: GuildLeaveHandler,
        private messageHandler: MessageHandler,
        private commandHandler: CommandHandler,
        private buttonHandler: ButtonHandler,
        private reactionHandler: ReactionHandler,
        private jobService: JobService
    ) {}

    public async start(): Promise<void> {
        this.registerListeners();
        await this.login(this.token);
    }

    private registerListeners(): void {
        this.client.on(Events.ClientReady, () => this.onReady());
        this.client.on(Events.ShardReady, (shardId: number, unavailableGuilds: Set<string>) =>
            this.onShardReady(shardId, unavailableGuilds)
        );
        this.client.on(Events.GuildCreate, (guild: Guild) => this.onGuildJoin(guild));
        this.client.on(Events.GuildDelete, (guild: Guild) => this.onGuildLeave(guild));
        this.client.on(Events.MessageCreate, (message: Message) => this.onMessage(message));
        this.client.on(Events.InteractionCreate, (intr: Interaction) => this.onInteraction(intr));
        this.client.on(
            Events.MessageReactionAdd,
            (messageReaction: MessageReaction | PartialMessageReaction, user: User | PartialUser) =>
                this.onReaction(messageReaction, user)
        );
        this.client.rest.on(RESTEvents.RateLimited, (rateLimitData: RateLimitData) =>
            this.onRateLimit(rateLimitData)
        );
    }

    private async login(token: string): Promise<void> {
        try {
            await this.client.login(token);
        } catch (error) {
            Logger.error(Logs.error.clientLogin, error);
            return;
        }
    }

    private async onReady(): Promise<void> {
        let userTag = this.client.user?.tag;
        Logger.info(Logs.info.clientLogin.replaceAll('{USER_TAG}', userTag));

        if (!Debug.dummyMode.enabled) {
            this.jobService.start();
        }

        this.ready = true;
        Logger.info(Logs.info.clientReady);
    }

    private onShardReady(shardId: number, _unavailableGuilds: Set<string>): void {
        Logger.setShardId(shardId);
    }

    private async onGuildJoin(guild: Guild): Promise<void> {
        if (!this.ready || Debug.dummyMode.enabled) {
            return;
        }

        try {
            await this.guildJoinHandler.process(guild);
        } catch (error) {
            Logger.error(Logs.error.guildJoin, error);
        }
    }

    private async onGuildLeave(guild: Guild): Promise<void> {
        if (!this.ready || Debug.dummyMode.enabled) {
            return;
        }

        try {
            await this.guildLeaveHandler.process(guild);
        } catch (error) {
            Logger.error(Logs.error.guildLeave, error);
        }
    }

    private async onMessage(message: Message): Promise<void> {
        if (
            !this.ready ||
            (Debug.dummyMode.enabled && !Debug.dummyMode.whitelist.includes(message.author.id))
        ) {
            return;
        }

        try {
            message = await PartialUtils.fillMessage(message);
            if (!message) {
                return;
            }

            await this.messageHandler.process(message);
        } catch (error) {
            Logger.error(Logs.error.message, error);
        }
    }

    private async onInteraction(intr: Interaction): Promise<void> {
        if (
            !this.ready ||
            (Debug.dummyMode.enabled && !Debug.dummyMode.whitelist.includes(intr.user.id))
        ) {
            return;
        }

        if (intr instanceof CommandInteraction || intr instanceof AutocompleteInteraction) {
            try {
                await this.commandHandler.process(intr);
            } catch (error) {
                Logger.error(Logs.error.command, error);
            }
        } else if (intr instanceof ButtonInteraction) {
            try {
                await this.buttonHandler.process(intr);
            } catch (error) {
                Logger.error(Logs.error.button, error);
            }
        }
    }

    private async onReaction(
        messageReaction: MessageReaction | PartialMessageReaction,
        reactor: User | PartialUser
    ): Promise<void> {
        if (
            !this.ready ||
            (Debug.dummyMode.enabled && !Debug.dummyMode.whitelist.includes(reactor.id))
        ) {
            return;
        }

        try {
            messageReaction = await PartialUtils.fillReaction(messageReaction);
            if (!messageReaction) {
                return;
            }

            reactor = await PartialUtils.fillUser(reactor);
            if (!reactor) {
                return;
            }

            await this.reactionHandler.process(
                messageReaction,
                messageReaction.message as Message,
                reactor
            );
        } catch (error) {
            Logger.error(Logs.error.reaction, error);
        }
    }

    private async onRateLimit(rateLimitData: RateLimitData): Promise<void> {
        if (rateLimitData.timeToReset >= Config.logging.rateLimit.minTimeout * 1000) {
            Logger.error(Logs.error.apiRateLimit, rateLimitData);
        }
    }
}

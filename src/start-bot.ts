import { REST } from '@discordjs/rest';
import { GatewayIntentBits, Options, Partials } from 'discord.js';

import { Api } from '@app/api';
import { BuffService } from '@app/buff-queue';
import { RegisterChannelCommand, RequestBuffCommand } from '@app/buff-queue/commands';
import { Button } from '@app/buttons';
import { Command } from '@app/commands';
import { DevelopmentCommand, HelpCommand, InfoCommand, TestCommand } from '@app/commands/chat';
import { Config } from '@app/config';
import { IntlService, Logs } from '@app/intl';

import { ViewDateSent } from './commands/message';
import { ViewDateJoined } from './commands/user';
import {
    ButtonHandler,
    CommandHandler,
    GuildJoinHandler,
    GuildLeaveHandler,
    MessageHandler,
    ReactionHandler,
    TriggerHandler,
} from './events';
import { CustomClient } from './extensions';
import { Job } from './jobs';
import { Bot } from './models/bot';
import { Reaction } from './reactions';
import { CommandRegistrationService, EventDataService, JobService, Logger } from './services';
import { Trigger } from './triggers';

async function start(): Promise<void> {
    // Services
    let eventDataService = new EventDataService();

    // Client
    let client = new CustomClient({
        intents: Config.client.intents.map(
            intent => GatewayIntentBits[intent as keyof typeof GatewayIntentBits]
        ),
        partials: Config.client.partials.map(partial => Partials[partial as keyof typeof Partials]),
        makeCache: Options.cacheWithLimits({
            // Keep default caching behavior
            ...Options.DefaultMakeCacheSettings,
            // Override specific options from config
            ...Config.client.caches,
        }),
    });

    const api = new Api();

    const i18nService = new IntlService();
    i18nService.init();
    const buffService = new BuffService(api);

    // Commands
    let commands: Command[] = [
        // Chat Commands
        new DevelopmentCommand(i18nService),
        new HelpCommand(i18nService),
        new InfoCommand(i18nService),
        new TestCommand(i18nService),
        new RegisterChannelCommand(i18nService, buffService),
        new RequestBuffCommand(i18nService),

        // Message Context Commands
        new ViewDateSent(i18nService),

        // User Context Commands
        new ViewDateJoined(i18nService),
    ];

    // Buttons
    let buttons: Button[] = [
        // TODO: Add new buttons here
    ];

    // Reactions
    let reactions: Reaction[] = [
        // TODO: Add new reactions here
    ];

    // Triggers
    let triggers: Trigger[] = [
        // TODO: Add new triggers here
    ];

    // Event handlers
    let guildJoinHandler = new GuildJoinHandler(eventDataService, i18nService, buffService);
    let guildLeaveHandler = new GuildLeaveHandler();
    let commandHandler = new CommandHandler(commands, eventDataService, i18nService);
    let buttonHandler = new ButtonHandler(buttons, eventDataService);
    let triggerHandler = new TriggerHandler(triggers, eventDataService);
    let messageHandler = new MessageHandler(triggerHandler);
    let reactionHandler = new ReactionHandler(reactions, eventDataService);

    // Jobs
    let jobs: Job[] = [
        // TODO: Add new jobs here
    ];

    // Bot
    let bot = new Bot(
        Config.client.token,
        client,
        guildJoinHandler,
        guildLeaveHandler,
        messageHandler,
        commandHandler,
        buttonHandler,
        reactionHandler,
        new JobService(jobs)
    );

    // Register
    if (process.argv[2] == 'commands') {
        try {
            let rest = new REST({ version: '10' }).setToken(Config.client.token);
            let commandRegistrationService = new CommandRegistrationService(rest);
            let localCmds = Object.values(commands)
                .sort((a, b) => (a.metadata.name > b.metadata.name ? 1 : -1))
                .map(cmd => cmd.metadata);
            await commandRegistrationService.process(localCmds, process.argv);
        } catch (error) {
            Logger.error(Logs.error.commandAction, error);
        }
        // Wait for any final logs to be written.
        await new Promise(resolve => setTimeout(resolve, 1000));
        // it is as cli
        // eslint-disable-next-line unicorn/no-process-exit
        process.exit();
    }

    await bot.start();
}

process.on('unhandledRejection', (reason, _promise) => {
    Logger.error(Logs.error.unhandledRejection, reason);
});

start().catch((error: Error) => {
    Logger.error(Logs.error.unspecified, error);
});

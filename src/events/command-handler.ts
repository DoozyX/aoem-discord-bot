import {
    AutocompleteInteraction,
    ChatInputCommandInteraction,
    CommandInteraction,
    NewsChannel,
    TextChannel,
    ThreadChannel,
} from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { Command, CommandDeferType } from '@app/commands';
import { Config } from '@app/config';
import { DiscordLimits } from '@app/constants';
import { IntlService, Logs } from '@app/intl';
import { EventData } from '@app/models/internal-models';
import { EventDataService, Logger } from '@app/services';
import { CommandUtils, InteractionUtils } from '@app/utils';

import { EventHandler } from '.';

export class CommandHandler implements EventHandler {
    private rateLimiter = new RateLimiter(
        Config.rateLimiting.commands.amount,
        Config.rateLimiting.commands.interval * 1000
    );

    constructor(
        public commands: Command[],
        private eventDataService: EventDataService,
        private readonly intlService: IntlService
    ) {}

    public async process(intr: CommandInteraction | AutocompleteInteraction): Promise<void> {
        // Don't respond to self, or other bots
        if (intr.user.id === intr.client.user?.id || intr.user.bot) {
            return;
        }

        const commandName = intr.commandName;

        // Try to find the command the user wants
        let command = this.commands.find(command => command.name === commandName);
        if (!command) {
            Logger.error(
                Logs.error.commandNotFound
                    .replaceAll('{INTERACTION_ID}', intr.id)
                    .replaceAll('{COMMAND_NAME}', commandName)
            );
            return;
        }

        if (intr instanceof AutocompleteInteraction) {
            if (!command.autocomplete) {
                Logger.error(
                    Logs.error.autocompleteNotFound
                        .replaceAll('{INTERACTION_ID}', intr.id)
                        .replaceAll('{COMMAND_NAME}', commandName)
                );
                return;
            }

            try {
                let option = intr.options.getFocused(true);
                let choices = await command.autocomplete(intr, option);
                await InteractionUtils.respond(
                    intr,
                    choices?.slice(0, DiscordLimits.CHOICES_PER_AUTOCOMPLETE)
                );
            } catch (error) {
                Logger.error(
                    intr.channel instanceof TextChannel ||
                        intr.channel instanceof NewsChannel ||
                        intr.channel instanceof ThreadChannel
                        ? Logs.error.autocompleteGuild
                              .replaceAll('{INTERACTION_ID}', intr.id)
                              .replaceAll('{OPTION_NAME}', commandName)
                              .replaceAll('{COMMAND_NAME}', commandName)
                              .replaceAll('{USER_TAG}', intr.user.tag)
                              .replaceAll('{USER_ID}', intr.user.id)
                              .replaceAll('{CHANNEL_NAME}', intr.channel.name)
                              .replaceAll('{CHANNEL_ID}', intr.channel.id)
                              .replaceAll('{GUILD_NAME}', intr.guild?.name ?? '')
                              .replaceAll('{GUILD_ID}', intr.guild?.id ?? '')
                        : Logs.error.autocompleteOther
                              .replaceAll('{INTERACTION_ID}', intr.id)
                              .replaceAll('{OPTION_NAME}', commandName)
                              .replaceAll('{COMMAND_NAME}', commandName)
                              .replaceAll('{USER_TAG}', intr.user.tag)
                              .replaceAll('{USER_ID}', intr.user.id),
                    error
                );
            }
            return;
        }

        // Check if user is rate limited
        let limited = this.rateLimiter.take(intr.user.id);
        if (limited) {
            return;
        }

        // Defer interaction
        // NOTE: Anything after this point we should be responding to the interaction
        switch (command.deferType) {
            case CommandDeferType.PUBLIC: {
                await InteractionUtils.deferReply(intr, false);
                break;
            }
            case CommandDeferType.HIDDEN: {
                await InteractionUtils.deferReply(intr, true);
                break;
            }
        }

        // Return if defer was unsuccessful
        if (command.deferType !== CommandDeferType.NONE && !intr.deferred) {
            return;
        }

        // Get data from database
        let data = await this.eventDataService.create({
            user: intr.user,
            channel: intr.channel,
            guild: intr.guild,
            args: intr instanceof ChatInputCommandInteraction ? intr.options : undefined,
        });

        try {
            // Check if interaction passes command checks
            let passesChecks = await CommandUtils.runChecks(this.intlService, command, intr, data);
            if (passesChecks) {
                // Execute the command
                Logger.info(`Executing command ${command.name}`);
                await command.execute(intr, data);
            }
        } catch (error) {
            await this.sendError(intr, data);

            // Log command error
            Logger.error(
                intr.channel instanceof TextChannel ||
                    intr.channel instanceof NewsChannel ||
                    intr.channel instanceof ThreadChannel
                    ? Logs.error.commandGuild
                          .replaceAll('{INTERACTION_ID}', intr.id)
                          .replaceAll('{COMMAND_NAME}', commandName)
                          .replaceAll('{USER_TAG}', intr.user.tag)
                          .replaceAll('{USER_ID}', intr.user.id)
                          .replaceAll('{CHANNEL_NAME}', intr.channel.name)
                          .replaceAll('{CHANNEL_ID}', intr.channel.id)
                          .replaceAll('{GUILD_NAME}', intr.guild?.name ?? '')
                          .replaceAll('{GUILD_ID}', intr.guild?.id ?? '')
                    : Logs.error.commandOther
                          .replaceAll('{INTERACTION_ID}', intr.id)
                          .replaceAll('{COMMAND_NAME}', commandName)
                          .replaceAll('{USER_TAG}', intr.user.tag)
                          .replaceAll('{USER_ID}', intr.user.id),
                error
            );
        }
    }

    private async sendError(intr: CommandInteraction, data: EventData): Promise<void> {
        try {
            await InteractionUtils.send(
                intr,
                this.intlService.getEmbed('errorEmbeds.command', data.lang, {
                    ERROR_CODE: intr.id,
                    GUILD_ID: intr.guild?.id ?? this.intlService.tr('other.na', data.lang),
                    SHARD_ID: (intr.guild?.shardId ?? 0).toString(),
                })
            );
        } catch {
            // Ignore
        }
    }
}

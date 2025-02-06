import { Colors, Guild, Role } from 'discord.js';

import { BuffService } from '@app/buff-queue';
import { IntlService, Logs } from '@app/intl';
import { EventDataService, Logger } from '@app/services';
import { ClientUtils, FormatUtils, MessageUtils } from '@app/utils';

import { EventHandler } from '.';

export class GuildJoinHandler implements EventHandler {
    constructor(
        private eventDataService: EventDataService,
        private readonly intlService: IntlService,
        private readonly buffService: BuffService
    ) {}

    public async process(guild: Guild): Promise<void> {
        Logger.info(
            Logs.info.guildJoined
                .replaceAll('{GUILD_NAME}', guild.name)
                .replaceAll('{GUILD_ID}', guild.id)
        );

        let owner = await guild.fetchOwner();

        // Get data from database
        let data = await this.eventDataService.create({
            user: owner?.user,
            guild,
        });

        // Send welcome message to the server's notify channel
        let notifyChannel = await ClientUtils.findNotifyChannel(
            this.intlService,
            guild,
            data.langGuild
        );
        if (notifyChannel) {
            const command = await ClientUtils.findAppCommand(
                guild.client,
                this.intlService.tr('chatCommands.help.name')
            );
            if (!command) {
                Logger.error(
                    `Help command not found, ${this.intlService.tr('chatCommands.help.name')} `
                );
                return;
            }
            await MessageUtils.send(
                notifyChannel,
                this.intlService
                    .getEmbed('displayEmbeds.welcome', data.langGuild, {
                        CMD_LINK_HELP: FormatUtils.commandMention(command),
                    })
                    .setAuthor({
                        name: guild.name,
                        iconURL: guild.iconURL() ?? undefined,
                    })
            );
        }

        // Send welcome message to owner
        if (owner) {
            const command = await ClientUtils.findAppCommand(
                guild.client,
                this.intlService.tr('chatCommands.help.name')
            );
            if (!command) {
                Logger.error(
                    `Help command not found, ${this.intlService.tr('chatCommands.help.name')} `
                );
                return;
            }
            await MessageUtils.send(
                owner.user,
                this.intlService
                    .getEmbed('displayEmbeds.welcome', data.lang, {
                        CMD_LINK_HELP: FormatUtils.commandMention(command),
                    })
                    .setAuthor({
                        name: guild.name,
                        iconURL: guild.iconURL() ?? undefined,
                    })
            );
        }

        await this.buffService.registerGuild(guild.id, guild.name);
    }
}

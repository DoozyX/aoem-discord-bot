import { Guild } from 'discord.js';

import { IntlService, Logs } from '@app/intl';
import { EventDataService, Logger } from '@app/services';
import { ClientUtils, FormatUtils, MessageUtils } from '@app/utils';

import { EventHandler } from '.';

export class GuildJoinHandler implements EventHandler {
    constructor(private eventDataService: EventDataService) {}

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
        let notifyChannel = await ClientUtils.findNotifyChannel(guild, data.langGuild);
        if (notifyChannel) {
            await MessageUtils.send(
                notifyChannel,
                IntlService.getEmbed('displayEmbeds.welcome', data.langGuild, {
                    CMD_LINK_HELP: FormatUtils.commandMention(
                        await ClientUtils.findAppCommand(
                            guild.client,
                            IntlService.tr('chatCommands.help')
                        )
                    ),
                }).setAuthor({
                    name: guild.name,
                    iconURL: guild.iconURL(),
                })
            );
        }

        // Send welcome message to owner
        if (owner) {
            await MessageUtils.send(
                owner.user,
                IntlService.getEmbed('displayEmbeds.welcome', data.lang, {
                    CMD_LINK_HELP: FormatUtils.commandMention(
                        await ClientUtils.findAppCommand(
                            guild.client,
                            IntlService.tr('chatCommands.help')
                        )
                    ),
                }).setAuthor({
                    name: guild.name,
                    iconURL: guild.iconURL(),
                })
            );
        }
    }
}

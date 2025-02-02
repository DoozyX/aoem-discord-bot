import { ChatInputCommandInteraction, EmbedBuilder, PermissionsString } from 'discord.js';

import { Command, CommandDeferType } from '@app/commands';
import { HelpOption } from '@app/enums';
import { EventData } from '@app/models/internal-models';
import { Intl } from '@app/services';
import { ClientUtils, FormatUtils, InteractionUtils } from '@app/utils';

export class HelpCommand implements Command {
    public names = [Intl.tr('chatCommands.help')];
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let arguments_ = {
            option: intr.options.getString(Intl.tr('arguments.option')) as HelpOption,
        };

        let embed: EmbedBuilder;
        switch (arguments_.option) {
            case HelpOption.CONTACT_SUPPORT: {
                embed = Intl.getEmbed('displayEmbeds.helpContactSupport', data.lang);
                break;
            }
            case HelpOption.COMMANDS: {
                embed = Intl.getEmbed('displayEmbeds.helpCommands', data.lang, {
                    CMD_LINK_TEST: FormatUtils.commandMention(
                        await ClientUtils.findAppCommand(intr.client, Intl.tr('chatCommands.test'))
                    ),
                    CMD_LINK_INFO: FormatUtils.commandMention(
                        await ClientUtils.findAppCommand(intr.client, Intl.tr('chatCommands.info'))
                    ),
                });
                break;
            }
            default: {
                return;
            }
        }

        await InteractionUtils.send(intr, embed);
    }
}

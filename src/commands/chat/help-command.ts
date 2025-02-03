import {
    ApplicationCommandOptionType,
    ApplicationCommandType,
    ChatInputCommandInteraction,
    EmbedBuilder,
    PermissionsString,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';

import { CommandDeferType } from '@app/commands';
import { ChatCommand } from '@app/commands/command';
import { HelpOption } from '@app/enums';
import { EventData } from '@app/models/internal-models';
import { Intl } from '@app/services';
import { ClientUtils, FormatUtils, InteractionUtils } from '@app/utils';

export class HelpCommand implements ChatCommand {
    public names = [Intl.tr('chatCommands.help')];
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        type: ApplicationCommandType.ChatInput,
        name: Intl.tr('chatCommands.help'),
        name_localizations: Intl.getRefLocalizationMap('chatCommands.help'),
        description: Intl.tr('commandDescs.help'),
        description_localizations: Intl.getRefLocalizationMap('commandDescs.help'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                name: Intl.tr('arguments.option'),
                name_localizations: Intl.getRefLocalizationMap('arguments.option'),
                description: Intl.tr('argDescs.helpOption'),
                description_localizations: Intl.getRefLocalizationMap('argDescs.helpOption'),
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: Intl.tr('helpOptionDescs.contactSupport'),
                        name_localizations: Intl.getRefLocalizationMap(
                            'helpOptionDescs.contactSupport'
                        ),
                        value: HelpOption.CONTACT_SUPPORT,
                    },
                    {
                        name: Intl.tr('helpOptionDescs.commands'),
                        name_localizations: Intl.getRefLocalizationMap('helpOptionDescs.commands'),
                        value: HelpOption.COMMANDS,
                    },
                ],
                required: true,
            },
        ],
    };

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

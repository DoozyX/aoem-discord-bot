import {
    ApplicationCommandOptionType,
    ChatInputCommandInteraction,
    EmbedBuilder,
    PermissionsString,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';

import { CommandDeferType, getBaseChatCommandMetadata } from '@app/commands';
import { ChatCommand } from '@app/commands/command';
import { HelpOption } from '@app/enums';
import { IntlService } from '@app/intl';
import { EventData } from '@app/models/internal-models';
import { ClientUtils, FormatUtils, InteractionUtils } from '@app/utils';

export class HelpCommand implements ChatCommand {
    public names = [IntlService.tr('chatCommands.help')];
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    public readonly name = 'help';
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        ...getBaseChatCommandMetadata(this.name),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                name: IntlService.tr('arguments.option'),
                name_localizations: IntlService.getRefLocalizationMap('arguments.option'),
                description: IntlService.tr('argDescs.helpOption'),
                description_localizations: IntlService.getRefLocalizationMap('argDescs.helpOption'),
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: IntlService.tr('helpOptionDescs.contactSupport'),
                        name_localizations: IntlService.getRefLocalizationMap(
                            'helpOptionDescs.contactSupport'
                        ),
                        value: HelpOption.CONTACT_SUPPORT,
                    },
                    {
                        name: IntlService.tr('helpOptionDescs.commands'),
                        name_localizations: IntlService.getRefLocalizationMap(
                            'helpOptionDescs.commands'
                        ),
                        value: HelpOption.COMMANDS,
                    },
                ],
                required: true,
            },
        ],
    };

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let arguments_ = {
            option: intr.options.getString(IntlService.tr('arguments.option')) as HelpOption,
        };

        let embed: EmbedBuilder;
        switch (arguments_.option) {
            case HelpOption.CONTACT_SUPPORT: {
                embed = IntlService.getEmbed('displayEmbeds.helpContactSupport', data.lang);
                break;
            }
            case HelpOption.COMMANDS: {
                const testCommand = await ClientUtils.findAppCommand(
                    intr.client,
                    IntlService.tr('chatCommands.test')
                );
                if (!testCommand) {
                    return;
                }
                const infoCommand = await ClientUtils.findAppCommand(
                    intr.client,
                    IntlService.tr('chatCommands.info')
                );
                if (!infoCommand) {
                    return;
                }
                embed = IntlService.getEmbed('displayEmbeds.helpCommands', data.lang, {
                    CMD_LINK_TEST: FormatUtils.commandMention(testCommand),
                    CMD_LINK_INFO: FormatUtils.commandMention(infoCommand),
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

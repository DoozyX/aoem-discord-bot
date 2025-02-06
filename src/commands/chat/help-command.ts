import {
    ApplicationCommandOptionType,
    ChatInputCommandInteraction,
    EmbedBuilder,
    PermissionsString,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';

import { ChatCommand, CommandDeferType, getBaseChatCommandMetadata } from '@app/commands';
import { HelpOption } from '@app/enums';
import { IntlService } from '@app/intl';
import { EventData } from '@app/models/internal-models';
import { ClientUtils, FormatUtils, InteractionUtils } from '@app/utils';

export class HelpCommand implements ChatCommand {
    public name = 'help';
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        ...getBaseChatCommandMetadata(this.intlService, this.name),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                name: this.intlService.tr('arguments.option'),
                name_localizations: this.intlService.getRefLocalizationMap('arguments.option'),
                description: this.intlService.tr('argDescs.helpOption'),
                description_localizations:
                    this.intlService.getRefLocalizationMap('argDescs.helpOption'),
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: this.intlService.tr('helpOptionDescs.contactSupport'),
                        name_localizations: this.intlService.getRefLocalizationMap(
                            'helpOptionDescs.contactSupport'
                        ),
                        value: HelpOption.CONTACT_SUPPORT,
                    },
                    {
                        name: this.intlService.tr('helpOptionDescs.commands'),
                        name_localizations: this.intlService.getRefLocalizationMap(
                            'helpOptionDescs.commands'
                        ),
                        value: HelpOption.COMMANDS,
                    },
                ],
                required: true,
            },
        ],
    };

    constructor(private intlService: IntlService) {}

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let arguments_ = {
            option: intr.options.getString(this.intlService.tr('arguments.option')) as HelpOption,
        };

        let embed: EmbedBuilder;
        switch (arguments_.option) {
            case HelpOption.CONTACT_SUPPORT: {
                embed = this.intlService.getEmbed('displayEmbeds.helpContactSupport', data.lang);
                break;
            }
            case HelpOption.COMMANDS: {
                const infoCommand = await ClientUtils.findAppCommand(
                    intr.client,
                    this.intlService.tr('chatCommands.info.name')
                );
                if (!infoCommand) {
                    return;
                }
                const requestBuffCommand = await ClientUtils.findAppCommand(
                    intr.client,
                    this.intlService.tr('chatCommands.request-buff.name')
                );
                if (!requestBuffCommand) {
                    return;
                }
                const assignQueueBuffCommand = await ClientUtils.findAppCommand(
                    intr.client,
                    this.intlService.tr('chatCommands.assign-queue-buff.name')
                );
                if (!assignQueueBuffCommand) {
                    return;
                }
                embed = this.intlService.getEmbed('displayEmbeds.helpCommands', data.lang, {
                    CMD_LINK_INFO: FormatUtils.commandMention(infoCommand),
                    CMD_REQUEST_BUFF: FormatUtils.commandMention(requestBuffCommand),
                    CMD_ASSIGN_QUEUE_BUFF: FormatUtils.commandMention(assignQueueBuffCommand),
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

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
import { InfoOption } from '@app/enums';
import { IntlService } from '@app/intl';
import { Language } from '@app/models/enum-helpers';
import { EventData } from '@app/models/internal-models';
import { InteractionUtils } from '@app/utils';

export class InfoCommand implements ChatCommand {
    public names = [IntlService.tr('chatCommands.info')];
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        type: ApplicationCommandType.ChatInput,
        name: IntlService.tr('chatCommands.info'),
        name_localizations: IntlService.getRefLocalizationMap('chatCommands.info'),
        description: IntlService.tr('commandDescs.info'),
        description_localizations: IntlService.getRefLocalizationMap('commandDescs.info'),
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
                        name: IntlService.tr('infoOptions.about'),
                        name_localizations: IntlService.getRefLocalizationMap('infoOptions.about'),
                        value: InfoOption.ABOUT,
                    },
                    {
                        name: IntlService.tr('infoOptions.translate'),
                        name_localizations:
                            IntlService.getRefLocalizationMap('infoOptions.translate'),
                        value: InfoOption.TRANSLATE,
                    },
                ],
                required: true,
            },
        ],
    };

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let arguments_ = {
            option: intr.options.getString(IntlService.tr('arguments.option')) as InfoOption,
        };

        let embed: EmbedBuilder;
        switch (arguments_.option) {
            case InfoOption.ABOUT: {
                embed = IntlService.getEmbed('displayEmbeds.about', data.lang);
                break;
            }
            case InfoOption.TRANSLATE: {
                embed = IntlService.getEmbed('displayEmbeds.translate', data.lang);
                for (let langCode of Language.Enabled) {
                    embed.addFields([
                        {
                            name: Language.Data[langCode].nativeName,
                            value: IntlService.tr('meta.translators', langCode),
                        },
                    ]);
                }
                break;
            }
            default: {
                return;
            }
        }

        await InteractionUtils.send(intr, embed);
    }
}

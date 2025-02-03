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
import { Language } from '@app/models/enum-helpers';
import { EventData } from '@app/models/internal-models';
import { Intl } from '@app/services';
import { InteractionUtils } from '@app/utils';

export class InfoCommand implements ChatCommand {
    public names = [Intl.tr('chatCommands.info')];
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        type: ApplicationCommandType.ChatInput,
        name: Intl.tr('chatCommands.info'),
        name_localizations: Intl.getRefLocalizationMap('chatCommands.info'),
        description: Intl.tr('commandDescs.info'),
        description_localizations: Intl.getRefLocalizationMap('commandDescs.info'),
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
                        name: Intl.tr('infoOptions.about'),
                        name_localizations: Intl.getRefLocalizationMap('infoOptions.about'),
                        value: InfoOption.ABOUT,
                    },
                    {
                        name: Intl.tr('infoOptions.translate'),
                        name_localizations: Intl.getRefLocalizationMap('infoOptions.translate'),
                        value: InfoOption.TRANSLATE,
                    },
                ],
                required: true,
            },
        ],
    };

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let arguments_ = {
            option: intr.options.getString(Intl.tr('arguments.option')) as InfoOption,
        };

        let embed: EmbedBuilder;
        switch (arguments_.option) {
            case InfoOption.ABOUT: {
                embed = Intl.getEmbed('displayEmbeds.about', data.lang);
                break;
            }
            case InfoOption.TRANSLATE: {
                embed = Intl.getEmbed('displayEmbeds.translate', data.lang);
                for (let langCode of Language.Enabled) {
                    embed.addFields([
                        {
                            name: Language.Data[langCode].nativeName,
                            value: Intl.tr('meta.translators', langCode),
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

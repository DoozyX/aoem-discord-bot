import {
    ApplicationCommandOptionType,
    ChatInputCommandInteraction,
    EmbedBuilder,
    PermissionsString,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';

import { CommandDeferType, getBaseChatCommandMetadata } from '@app/commands';
import { ChatCommand } from '@app/commands/command';
import { InfoOption } from '@app/enums';
import { IntlService } from '@app/intl';
import { Language } from '@app/models/enum-helpers';
import { EventData } from '@app/models/internal-models';
import { InteractionUtils } from '@app/utils';

export class InfoCommand implements ChatCommand {
    public name = 'info';
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
                        name: this.intlService.tr('infoOptions.about'),
                        name_localizations:
                            this.intlService.getRefLocalizationMap('infoOptions.about'),
                        value: InfoOption.ABOUT,
                    },
                    {
                        name: this.intlService.tr('infoOptions.translate'),
                        name_localizations:
                            this.intlService.getRefLocalizationMap('infoOptions.translate'),
                        value: InfoOption.TRANSLATE,
                    },
                ],
                required: true,
            },
        ],
    };

    constructor(private intlService: IntlService) {}

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let arguments_ = {
            option: intr.options.getString(this.intlService.tr('arguments.option')) as InfoOption,
        };

        let embed: EmbedBuilder;
        switch (arguments_.option) {
            case InfoOption.ABOUT: {
                embed = this.intlService.getEmbed('displayEmbeds.about', data.lang);
                break;
            }
            case InfoOption.TRANSLATE: {
                embed = this.intlService.getEmbed('displayEmbeds.translate', data.lang);
                for (let langCode of Language.Enabled) {
                    embed.addFields([
                        {
                            name: Language.Data[langCode].nativeName,
                            value: this.intlService.tr('meta.translators', langCode),
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

import { APIApplicationCommandBasicOption, ApplicationCommandOptionType } from 'discord.js';

import { DevelopmentCommandName, HelpOption, InfoOption } from '@app/enums';
import { Intl } from '@app/services';

export class Arguments {
    public static readonly DEV_COMMAND: APIApplicationCommandBasicOption = {
        name: Intl.tr('arguments.command'),
        name_localizations: Intl.getRefLocalizationMap('arguments.command'),
        description: Intl.tr('argDescs.devCommand'),
        description_localizations: Intl.getRefLocalizationMap('argDescs.devCommand'),
        type: ApplicationCommandOptionType.String,
        choices: [
            {
                name: Intl.tr('devCommandNames.info'),
                name_localizations: Intl.getRefLocalizationMap('devCommandNames.info'),
                value: DevelopmentCommandName.INFO,
            },
        ],
    };
    public static readonly HELP_OPTION: APIApplicationCommandBasicOption = {
        name: Intl.tr('arguments.option'),
        name_localizations: Intl.getRefLocalizationMap('arguments.option'),
        description: Intl.tr('argDescs.helpOption'),
        description_localizations: Intl.getRefLocalizationMap('argDescs.helpOption'),
        type: ApplicationCommandOptionType.String,
        choices: [
            {
                name: Intl.tr('helpOptionDescs.contactSupport'),
                name_localizations: Intl.getRefLocalizationMap('helpOptionDescs.contactSupport'),
                value: HelpOption.CONTACT_SUPPORT,
            },
            {
                name: Intl.tr('helpOptionDescs.commands'),
                name_localizations: Intl.getRefLocalizationMap('helpOptionDescs.commands'),
                value: HelpOption.COMMANDS,
            },
        ],
    };
    public static readonly INFO_OPTION: APIApplicationCommandBasicOption = {
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
    };
}

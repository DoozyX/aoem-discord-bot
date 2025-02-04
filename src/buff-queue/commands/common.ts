import { APIApplicationCommandOption, ApplicationCommandOptionType } from 'discord.js';

import { BuffType } from '@app/buff-queue';
import { IntlService } from '@app/intl';

export const buffTypeOption = (
    intlService: IntlService,
    name: string
): APIApplicationCommandOption => ({
    name: name,
    name_localizations: intlService.getRefLocalizationMap('buffTypeOption.name'),
    description: intlService.tr('buffTypeOption.description'),
    description_localizations: intlService.getRefLocalizationMap('buffTypeOption.description'),
    type: ApplicationCommandOptionType.String,
    choices: [
        {
            name: intlService.tr('buffTypeOption.valueConstruction'),
            name_localizations: intlService.getRefLocalizationMap(
                'buffTypeOption.valueConstruction'
            ),
            value: BuffType.CONSTRUCTION,
        },
        {
            name: intlService.tr('buffTypeOption.valueResearch'),
            name_localizations: intlService.getRefLocalizationMap('buffTypeOption.valueResearch'),
            value: BuffType.RESEARCH,
        },
        {
            name: intlService.tr('buffTypeOption.valueTraining'),
            name_localizations: intlService.getRefLocalizationMap('buffTypeOption.valueTraining'),
            value: BuffType.TRAINING,
        },
    ],
    required: true,
});

import {
    ApplicationCommandOptionType,
    ChatInputCommandInteraction,
    PermissionsString,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { BuffService, BuffType } from '@app/buff-queue';
import { ChatCommand, CommandDeferType, getBaseChatCommandMetadata } from '@app/commands';
import { IntlService } from '@app/intl';
import { EventData } from '@app/models/internal-models';
import { InteractionUtils, isValidEnumValue } from '@app/utils';

export class RegisterChannelCommand implements ChatCommand {
    public name = 'register-channel';
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    private optionName = this.intlService.tr('buffTypeOption.name');
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        ...getBaseChatCommandMetadata(this.intlService, this.name),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                name: this.optionName,
                name_localizations: this.intlService.getRefLocalizationMap('buffTypeOption.name'),
                description: this.intlService.tr('buffTypeOption.description'),
                description_localizations: this.intlService.getRefLocalizationMap(
                    'buffTypeOption.description'
                ),
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: this.intlService.tr('buffTypeOption.valueConstruction'),
                        name_localizations: this.intlService.getRefLocalizationMap(
                            'buffTypeOption.valueConstruction'
                        ),
                        value: BuffType.CONSTRUCTION,
                    },
                    {
                        name: this.intlService.tr('buffTypeOption.valueResearch'),
                        name_localizations: this.intlService.getRefLocalizationMap(
                            'buffTypeOption.valueResearch'
                        ),
                        value: BuffType.RESEARCH,
                    },
                    {
                        name: this.intlService.tr('buffTypeOption.valueTraining'),
                        name_localizations: this.intlService.getRefLocalizationMap(
                            'buffTypeOption.valueTraining'
                        ),
                        value: BuffType.TRAINING,
                    },
                ],
                required: true,
            },
        ],
    };

    constructor(
        private readonly intlService: IntlService,
        private readonly buffService: BuffService
    ) {}

    public async execute(intr: ChatInputCommandInteraction, _data: EventData): Promise<void> {
        const channelId = intr.channelId;
        const guildId = intr.guildId;

        if (!guildId) {
            await InteractionUtils.send(intr, 'needs to be from guild');
            return;
        }

        const buffTypeOption = intr.options.getString(this.optionName);
        if (!buffTypeOption || !isValidEnumValue(BuffType, buffTypeOption)) {
            await InteractionUtils.send(intr, 'invalid buff type');
            return;
        }
        const buffType = buffTypeOption as BuffType;

        try {
            await this.buffService.registerChannel(guildId, buffType, channelId);

            // Sending confirmation or performing additional logic
            await InteractionUtils.send(intr, `Channel registered successfully for ${buffType}.`);
        } catch (error) {
            await InteractionUtils.send(
                intr,
                `Channel can't be registered. ${(error as Error).message}`
            );
        }
    }
}

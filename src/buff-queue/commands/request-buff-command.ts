import {
    ApplicationCommandOptionType,
    ChatInputCommandInteraction,
    GuildMember,
    PermissionsString,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { BuffService, BuffType } from '@app/buff-queue';
import { buffTypeOption } from '@app/buff-queue/commands/common';
import { Command, CommandDeferType, getBaseChatCommandMetadata } from '@app/commands';
import { IntlService } from '@app/intl';
import { EventData } from '@app/models/internal-models';
import { InteractionUtils, isValidEnumValue, parseDate } from '@app/utils';

export class RequestBuffCommand implements Command {
    public name = 'request-buff';
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    private optionName = this.intlService.tr('buffTypeOption.name');
    private dateOptionName = 'date';
    private timeOptionName = 'time';
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        ...getBaseChatCommandMetadata(this.intlService, this.name),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            buffTypeOption(this.intlService, this.optionName),
            {
                name: this.dateOptionName,
                description: 'Date (YYYY-MM-DD)',
                type: ApplicationCommandOptionType.String,
                required: false,
            },
            {
                name: this.timeOptionName,
                description: 'Time (HH:mm or H)',
                type: ApplicationCommandOptionType.String,
                required: false,
            },
        ],
    };

    constructor(
        private readonly intlService: IntlService,
        private readonly buffService: BuffService
    ) {}

    public async execute(intr: ChatInputCommandInteraction, _data: EventData): Promise<void> {
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

        const member = intr.member?.user.id;
        if (!member) {
            await InteractionUtils.send(intr, 'invalid member');
            return;
        }

        const dateOption = intr.options.getString('date');
        const timeOption = intr.options.getString('time');

        let date: Date | null = null;
        try {
            date = parseDate(dateOption, timeOption);
        } catch (error) {
            await InteractionUtils.send(
                intr,
                `invalid date/time: ${error instanceof Error ? error.message : 'Invalid input'}`
            );
        }

        try {
            await this.buffService.requestBuff(guildId, buffType, member, date);

            await InteractionUtils.send(
                intr,
                `Successfully requested buff. Check ${buffType} channel`
            );
        } catch {
            await InteractionUtils.send(intr, `Can't request buff.`);
        }
    }
}

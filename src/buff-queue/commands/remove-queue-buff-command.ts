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
import { InteractionUtils, isValidEnumValue } from '@app/utils';

export class RemoveQueueBuffCommand implements Command {
    public name = 'remove-queue-buff';
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    private buffTypeOptionName = this.intlService.tr('buffTypeOption.name');
    private positionOptionName = 'position';
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        ...getBaseChatCommandMetadata(this.intlService, this.name),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            buffTypeOption(this.intlService, this.buffTypeOptionName),
            {
                name: this.positionOptionName,
                description: 'Remove member from buff queue at position',
                type: ApplicationCommandOptionType.Integer,
                required: true,
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

        const buffTypeOption = intr.options.getString(this.buffTypeOptionName);
        if (!buffTypeOption || !isValidEnumValue(BuffType, buffTypeOption)) {
            await InteractionUtils.send(intr, 'invalid buff type');
            return;
        }
        const buffType = buffTypeOption as BuffType;

        const position = intr.options.getInteger(this.positionOptionName);
        if (!position) {
            await InteractionUtils.send(intr, 'invalid position');
            return;
        }

        try {
            await this.buffService.removeBuffMember(
                guildId,
                intr.member as GuildMember,
                buffType,
                position
            );
            await InteractionUtils.send(
                intr,
                `Successfully assigned buff. Check ${buffType} channel`
            );
        } catch {
            await InteractionUtils.send(intr, `Can't remove buff.`);
        }
    }
}

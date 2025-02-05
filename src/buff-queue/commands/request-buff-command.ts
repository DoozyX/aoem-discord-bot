import {
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

export class RequestBuffCommand implements Command {
    public name = 'request-buff';
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    private optionName = this.intlService.tr('buffTypeOption.name');
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        ...getBaseChatCommandMetadata(this.intlService, this.name),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [buffTypeOption(this.intlService, this.optionName)],
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

        try {
            await this.buffService.requestBuff(guildId, buffType, member);

            await InteractionUtils.send(
                intr,
                `Sucessfully requested for ${buffType}. Check ${buffType} channel to see the queue`
            );

            await this.buffService.refreshQueue(guildId, buffType);

            await InteractionUtils.send(
                intr,
                `Successfully requested buff. Check ${buffType} channel`
            );
        } catch (error) {
            await InteractionUtils.send(intr, `Can't request buff. ${(error as Error).message}`);
        }
    }
}

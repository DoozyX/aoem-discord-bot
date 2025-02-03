import {
    ChatInputCommandInteraction,
    PermissionsString,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { Command, CommandDeferType, getBaseChatCommandMetadata } from '@app/commands';
import { IntlService } from '@app/intl';
import { EventData } from '@app/models/internal-models';
import { InteractionUtils } from '@app/utils';

export class TestCommand implements Command {
    public names = [IntlService.tr('chatCommands.test')];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    public readonly name = 'test';
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        ...getBaseChatCommandMetadata(this.name),
        dm_permission: true,
        default_member_permissions: undefined,
    };

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        await InteractionUtils.send(intr, IntlService.getEmbed('displayEmbeds.test', data.lang));
    }
}

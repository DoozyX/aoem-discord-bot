import { ChatInputCommandInteraction, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { Command, CommandDeferType } from '@app/commands';
import { EventData } from '@app/models/internal-models';
import { Intl } from '@app/services';
import { InteractionUtils } from '@app/utils';

export class TestCommand implements Command {
    public names = [Intl.tr('chatCommands.test')];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        await InteractionUtils.send(intr, Intl.getEmbed('displayEmbeds.test', data.lang));
    }
}

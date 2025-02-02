import { MessageContextMenuCommandInteraction, PermissionsString } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import { DateTime } from 'luxon';

import { Command, CommandDeferType } from '@app/commands';
import { EventData } from '@app/models/internal-models';
import { Intl } from '@app/services';
import { InteractionUtils } from '@app/utils';

export class ViewDateSent implements Command {
    public names = [Intl.tr('messageCommands.viewDateSent')];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(
        intr: MessageContextMenuCommandInteraction,
        data: EventData
    ): Promise<void> {
        await InteractionUtils.send(
            intr,
            Intl.getEmbed('displayEmbeds.viewDateSent', data.lang, {
                DATE: DateTime.fromJSDate(intr.targetMessage.createdAt).toLocaleString(
                    DateTime.DATE_HUGE
                ),
            })
        );
    }
}

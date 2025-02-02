import { DMChannel, PermissionsString, UserContextMenuCommandInteraction } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import { DateTime } from 'luxon';

import { Command, CommandDeferType } from '@app/commands';
import { EventData } from '@app/models/internal-models';
import { Intl } from '@app/services';
import { InteractionUtils } from '@app/utils';

export class ViewDateJoined implements Command {
    public names = [Intl.tr('userCommands.viewDateJoined')];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: UserContextMenuCommandInteraction, data: EventData): Promise<void> {
        let joinDate: Date;
        if (intr.channel instanceof DMChannel) {
            joinDate = intr.targetUser.createdAt;
        } else {
            let member = await intr.guild.members.fetch(intr.targetUser.id);
            joinDate = member.joinedAt;
        }

        await InteractionUtils.send(
            intr,
            Intl.getEmbed('displayEmbeds.viewDateJoined', data.lang, {
                TARGET: intr.targetUser.toString(),
                DATE: DateTime.fromJSDate(joinDate).toLocaleString(DateTime.DATE_HUGE),
            })
        );
    }
}

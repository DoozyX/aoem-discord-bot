import {
    ApplicationCommandType,
    DMChannel,
    PermissionsString,
    RESTPostAPIContextMenuApplicationCommandsJSONBody,
    UserContextMenuCommandInteraction,
} from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import { DateTime } from 'luxon';

import { CommandDeferType } from '@app/commands';
import { UserCommand } from '@app/commands/command';
import { IntlService } from '@app/intl';
import { EventData } from '@app/models/internal-models';
import { InteractionUtils } from '@app/utils';

export class ViewDateJoined implements UserCommand {
    public names = [IntlService.tr('userCommands.viewDateJoined')];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    public metadata: RESTPostAPIContextMenuApplicationCommandsJSONBody = {
        type: ApplicationCommandType.User,
        name: IntlService.tr('userCommands.viewDateJoined'),
        name_localizations: IntlService.getRefLocalizationMap('userCommands.viewDateJoined'),
        default_member_permissions: undefined,
        dm_permission: true,
    };

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
            IntlService.getEmbed('displayEmbeds.viewDateJoined', data.lang, {
                TARGET: intr.targetUser.toString(),
                DATE: DateTime.fromJSDate(joinDate).toLocaleString(DateTime.DATE_HUGE),
            })
        );
    }
}

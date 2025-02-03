import {
    ApplicationCommandType,
    MessageContextMenuCommandInteraction,
    PermissionsString,
    RESTPostAPIContextMenuApplicationCommandsJSONBody,
} from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import { DateTime } from 'luxon';

import { CommandDeferType } from '@app/commands';
import { MessageCommand } from '@app/commands/command';
import { IntlService } from '@app/intl';
import { EventData } from '@app/models/internal-models';
import { InteractionUtils } from '@app/utils';

export class ViewDateSent implements MessageCommand {
    public name = 'viewDateSent';
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    public metadata: RESTPostAPIContextMenuApplicationCommandsJSONBody = {
        type: ApplicationCommandType.Message,
        name: this.intlService.tr('messageCommands.viewDateSent'),
        name_localizations: this.intlService.getRefLocalizationMap('messageCommands.viewDateSent'),
        default_member_permissions: undefined,
        dm_permission: true,
    };

    constructor(private readonly intlService: IntlService) {}

    public async execute(
        intr: MessageContextMenuCommandInteraction,
        data: EventData
    ): Promise<void> {
        await InteractionUtils.send(
            intr,
            this.intlService.getEmbed('displayEmbeds.viewDateSent', data.lang, {
                DATE: DateTime.fromJSDate(intr.targetMessage.createdAt).toLocaleString(
                    DateTime.DATE_HUGE
                ),
            })
        );
    }
}

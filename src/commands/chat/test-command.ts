import {
    ApplicationCommandType,
    ChatInputCommandInteraction,
    PermissionsString,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { Command, CommandDeferType } from '@app/commands';
import { IntlService } from '@app/intl';
import { EventData } from '@app/models/internal-models';
import { InteractionUtils } from '@app/utils';

export class TestCommand implements Command {
    public names = [IntlService.tr('chatCommands.test')];
    public cooldown = new RateLimiter(1, 5000);
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        type: ApplicationCommandType.ChatInput,
        name: IntlService.tr('chatCommands.test'),
        name_localizations: IntlService.getRefLocalizationMap('chatCommands.test'),
        description: IntlService.tr('commandDescs.test'),
        description_localizations: IntlService.getRefLocalizationMap('commandDescs.test'),
        dm_permission: true,
        default_member_permissions: undefined,
    };

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        await InteractionUtils.send(intr, IntlService.getEmbed('displayEmbeds.test', data.lang));
    }
}

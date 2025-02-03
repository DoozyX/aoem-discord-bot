import {
    ApplicationCommandType,
    ChatInputCommandInteraction,
    PermissionsString,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';
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
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        type: ApplicationCommandType.ChatInput,
        name: Intl.tr('chatCommands.test'),
        name_localizations: Intl.getRefLocalizationMap('chatCommands.test'),
        description: Intl.tr('commandDescs.test'),
        description_localizations: Intl.getRefLocalizationMap('commandDescs.test'),
        dm_permission: true,
        default_member_permissions: undefined,
    };

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        await InteractionUtils.send(intr, Intl.getEmbed('displayEmbeds.test', data.lang));
    }
}

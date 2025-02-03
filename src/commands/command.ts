import {
    ApplicationCommandOptionChoiceData,
    ApplicationCommandType,
    AutocompleteFocusedOption,
    AutocompleteInteraction,
    CommandInteraction,
    PermissionsString,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
    RESTPostAPIContextMenuApplicationCommandsJSONBody,
} from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';

import { IntlService } from '@app/intl';
import { EventData } from '@app/models/internal-models';

export interface Command {
    name: string;
    cooldown?: RateLimiter;
    deferType: CommandDeferType;
    requireClientPerms: PermissionsString[];
    metadata:
        | RESTPostAPIChatInputApplicationCommandsJSONBody
        | RESTPostAPIContextMenuApplicationCommandsJSONBody;

    autocomplete?(
        intr: AutocompleteInteraction,
        option: AutocompleteFocusedOption
    ): Promise<ApplicationCommandOptionChoiceData[]>;

    execute(intr: CommandInteraction, data: EventData): Promise<void>;
}

export enum CommandDeferType {
    PUBLIC = 'PUBLIC',
    HIDDEN = 'HIDDEN',
    NONE = 'NONE',
}

export interface ChatCommand extends Command {
    metadata: RESTPostAPIChatInputApplicationCommandsJSONBody;
}

export interface MessageCommand extends Command {
    metadata: RESTPostAPIContextMenuApplicationCommandsJSONBody;
}

export interface UserCommand extends Command {
    metadata: RESTPostAPIContextMenuApplicationCommandsJSONBody;
}

export const getBaseChatCommandMetadata = (
    intlService: IntlService,
    name: string
): Pick<
    RESTPostAPIChatInputApplicationCommandsJSONBody,
    'type' | 'name' | 'name_localizations' | 'description' | 'description_localizations'
> => {
    return {
        type: ApplicationCommandType.ChatInput,
        name: intlService.tr(`chatCommands.${name}.name`),
        name_localizations: intlService.getRefLocalizationMap(`chatCommands.${name}.name`),
        description: intlService.tr(`chatCommands.${name}.description`),
        description_localizations: intlService.getRefLocalizationMap(
            `chatCommands.${name}.description`
        ),
    };
};

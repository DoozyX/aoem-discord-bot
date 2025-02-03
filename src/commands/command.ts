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
    names: string[];
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
    name: string
): Pick<
    RESTPostAPIChatInputApplicationCommandsJSONBody,
    'type' | 'name' | 'name_localizations' | 'description' | 'description_localizations'
> => {
    return {
        type: ApplicationCommandType.ChatInput,
        name: IntlService.tr(`chatCommands.${name}.name`),
        name_localizations: IntlService.getRefLocalizationMap(`chatCommands.${name}.name`),
        description: IntlService.tr(`chatCommands.${name}.description`),
        description_localizations: IntlService.getRefLocalizationMap(
            `chatCommands.${name}.description`
        ),
    };
};

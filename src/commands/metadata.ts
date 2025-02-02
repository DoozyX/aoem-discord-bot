import {
    ApplicationCommandType,
    PermissionFlagsBits,
    PermissionsBitField,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
    RESTPostAPIContextMenuApplicationCommandsJSONBody,
} from 'discord.js';

import { Intl } from '@app/services';

import { Arguments as Arguments } from '.';

export const ChatCommandMetadata: {
    [command: string]: RESTPostAPIChatInputApplicationCommandsJSONBody;
} = {
    DEV: {
        type: ApplicationCommandType.ChatInput,
        name: Intl.tr('chatCommands.dev'),
        name_localizations: Intl.getRefLocalizationMap('chatCommands.dev'),
        description: Intl.tr('commandDescs.dev'),
        description_localizations: Intl.getRefLocalizationMap('commandDescs.dev'),
        dm_permission: true,
        default_member_permissions: PermissionsBitField.resolve([
            PermissionFlagsBits.Administrator,
        ]).toString(),
        options: [
            {
                ...Arguments.DEV_COMMAND,
                required: true,
            },
        ],
    },
    HELP: {
        type: ApplicationCommandType.ChatInput,
        name: Intl.tr('chatCommands.help'),
        name_localizations: Intl.getRefLocalizationMap('chatCommands.help'),
        description: Intl.tr('commandDescs.help'),
        description_localizations: Intl.getRefLocalizationMap('commandDescs.help'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Arguments.HELP_OPTION,
                required: true,
            },
        ],
    },
    INFO: {
        type: ApplicationCommandType.ChatInput,
        name: Intl.tr('chatCommands.info'),
        name_localizations: Intl.getRefLocalizationMap('chatCommands.info'),
        description: Intl.tr('commandDescs.info'),
        description_localizations: Intl.getRefLocalizationMap('commandDescs.info'),
        dm_permission: true,
        default_member_permissions: undefined,
        options: [
            {
                ...Arguments.INFO_OPTION,
                required: true,
            },
        ],
    },
    TEST: {
        type: ApplicationCommandType.ChatInput,
        name: Intl.tr('chatCommands.test'),
        name_localizations: Intl.getRefLocalizationMap('chatCommands.test'),
        description: Intl.tr('commandDescs.test'),
        description_localizations: Intl.getRefLocalizationMap('commandDescs.test'),
        dm_permission: true,
        default_member_permissions: undefined,
    },
};

export const MessageCommandMetadata: {
    [command: string]: RESTPostAPIContextMenuApplicationCommandsJSONBody;
} = {
    VIEW_DATE_SENT: {
        type: ApplicationCommandType.Message,
        name: Intl.tr('messageCommands.viewDateSent'),
        name_localizations: Intl.getRefLocalizationMap('messageCommands.viewDateSent'),
        default_member_permissions: undefined,
        dm_permission: true,
    },
};

export const UserCommandMetadata: {
    [command: string]: RESTPostAPIContextMenuApplicationCommandsJSONBody;
} = {
    VIEW_DATE_JOINED: {
        type: ApplicationCommandType.User,
        name: Intl.tr('userCommands.viewDateJoined'),
        name_localizations: Intl.getRefLocalizationMap('userCommands.viewDateJoined'),
        default_member_permissions: undefined,
        dm_permission: true,
    },
};

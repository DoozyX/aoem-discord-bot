import { Locale, PermissionsString } from 'discord.js';

import { IntlService } from '@app/intl';

interface PermissionData {
    displayName(langCode: Locale): string;
}

export class Permission {
    public static Data: {
        [key in PermissionsString]: PermissionData;
    } = {
        AddReactions: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.AddReactions', langCode);
            },
        },
        Administrator: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.Administrator', langCode);
            },
        },
        AttachFiles: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.AttachFiles', langCode);
            },
        },
        BanMembers: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.BanMembers', langCode);
            },
        },
        ChangeNickname: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ChangeNickname', langCode);
            },
        },
        Connect: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.Connect', langCode);
            },
        },
        CreateEvents: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.CreateEvents', langCode);
            },
        },
        CreateGuildExpressions: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.CreateGuildExpressions', langCode);
            },
        },
        CreateInstantInvite: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.CreateInstantInvite', langCode);
            },
        },
        CreatePrivateThreads: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.CreatePrivateThreads', langCode);
            },
        },
        CreatePublicThreads: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.CreatePublicThreads', langCode);
            },
        },
        DeafenMembers: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.DeafenMembers', langCode);
            },
        },
        EmbedLinks: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.EmbedLinks', langCode);
            },
        },
        KickMembers: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.KickMembers', langCode);
            },
        },
        ManageChannels: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ManageChannels', langCode);
            },
        },
        ManageEmojisAndStickers: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ManageEmojisAndStickers', langCode);
            },
        },
        ManageEvents: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ManageEvents', langCode);
            },
        },
        ManageGuild: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ManageGuild', langCode);
            },
        },
        ManageGuildExpressions: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ManageGuildExpressions', langCode);
            },
        },
        ManageMessages: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ManageMessages', langCode);
            },
        },
        ManageNicknames: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ManageNicknames', langCode);
            },
        },
        ManageRoles: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ManageRoles', langCode);
            },
        },
        ManageThreads: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ManageThreads', langCode);
            },
        },
        ManageWebhooks: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ManageWebhooks', langCode);
            },
        },
        MentionEveryone: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.MentionEveryone', langCode);
            },
        },
        ModerateMembers: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ModerateMembers', langCode);
            },
        },
        MoveMembers: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.MoveMembers', langCode);
            },
        },
        MuteMembers: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.MuteMembers', langCode);
            },
        },
        PrioritySpeaker: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.PrioritySpeaker', langCode);
            },
        },
        ReadMessageHistory: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ReadMessageHistory', langCode);
            },
        },
        RequestToSpeak: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.RequestToSpeak', langCode);
            },
        },
        SendMessages: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.SendMessages', langCode);
            },
        },
        SendMessagesInThreads: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.SendMessagesInThreads', langCode);
            },
        },
        SendPolls: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.SendPolls', langCode);
            },
        },
        SendTTSMessages: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.SendTTSMessages', langCode);
            },
        },
        SendVoiceMessages: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.SendVoiceMessages', langCode);
            },
        },
        Speak: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.Speak', langCode);
            },
        },
        Stream: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.Stream', langCode);
            },
        },
        UseApplicationCommands: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.UseApplicationCommands', langCode);
            },
        },
        UseEmbeddedActivities: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.UseEmbeddedActivities', langCode);
            },
        },
        UseExternalApps: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.UseExternalApps', langCode);
            },
        },
        UseExternalEmojis: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.UseExternalEmojis', langCode);
            },
        },
        UseExternalSounds: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.UseExternalSounds', langCode);
            },
        },
        UseExternalStickers: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.UseExternalStickers', langCode);
            },
        },
        UseSoundboard: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.UseSoundboard', langCode);
            },
        },
        UseVAD: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.UseVAD', langCode);
            },
        },
        ViewAuditLog: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ViewAuditLog', langCode);
            },
        },
        ViewChannel: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ViewChannel', langCode);
            },
        },
        ViewCreatorMonetizationAnalytics: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ViewCreatorMonetizationAnalytics', langCode);
            },
        },
        ViewGuildInsights: {
            displayName(langCode: Locale): string {
                return IntlService.tr('permissions.ViewGuildInsights', langCode);
            },
        },
    };
}

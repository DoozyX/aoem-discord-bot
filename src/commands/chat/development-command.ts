import djs, {
    APIApplicationCommandBasicOption,
    ApplicationCommandOptionType,
    ApplicationCommandType,
    ChatInputCommandInteraction,
    PermissionFlagsBits,
    PermissionsBitField,
    PermissionsString,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';
import os from 'node:os';
import typescript from 'typescript';

import { CommandDeferType } from '@app/commands';
import { ChatCommand } from '@app/commands/command';
import { Config } from '@app/config';
import { DevelopmentCommandName } from '@app/enums';
import { EventData } from '@app/models/internal-models';
import { Intl } from '@app/services';
import { FormatUtils, InteractionUtils, ShardUtils } from '@app/utils';

export class DevelopmentCommand implements ChatCommand {
    public names = [Intl.tr('chatCommands.dev')];
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
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
                name: Intl.tr('arguments.command'),
                name_localizations: Intl.getRefLocalizationMap('arguments.command'),
                description: Intl.tr('argDescs.devCommand'),
                description_localizations: Intl.getRefLocalizationMap('argDescs.devCommand'),
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: Intl.tr('devCommandNames.info'),
                        name_localizations: Intl.getRefLocalizationMap('devCommandNames.info'),
                        value: DevelopmentCommandName.INFO,
                    },
                ],
                required: true,
            },
        ],
    };

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        if (!Config.developers.includes(intr.user.id)) {
            await InteractionUtils.send(intr, Intl.getEmbed('validationEmbeds.devOnly', data.lang));
            return;
        }

        let arguments_ = {
            command: intr.options.getString(Intl.tr('arguments.command')) as DevelopmentCommandName,
        };

        switch (arguments_.command) {
            case DevelopmentCommandName.INFO: {
                let shardCount = intr.client.shard?.count ?? 1;
                let serverCount: number;
                if (intr.client.shard) {
                    try {
                        serverCount = await ShardUtils.serverCount(intr.client.shard);
                    } catch (error) {
                        if (error.name.includes('ShardingInProcess')) {
                            await InteractionUtils.send(
                                intr,
                                Intl.getEmbed('errorEmbeds.startupInProcess', data.lang)
                            );
                            return;
                        } else {
                            throw error;
                        }
                    }
                } else {
                    serverCount = intr.client.guilds.cache.size;
                }

                let memory = process.memoryUsage();

                await InteractionUtils.send(
                    intr,
                    Intl.getEmbed('displayEmbeds.devInfo', data.lang, {
                        NODE_VERSION: process.version,
                        TS_VERSION: `v${typescript.version}`,
                        DJS_VERSION: `v${djs.version}`,
                        SHARD_COUNT: shardCount.toLocaleString(data.lang),
                        SERVER_COUNT: serverCount.toLocaleString(data.lang),
                        SERVER_COUNT_PER_SHARD: Math.round(serverCount / shardCount).toLocaleString(
                            data.lang
                        ),
                        RSS_SIZE: FormatUtils.fileSize(memory.rss),
                        RSS_SIZE_PER_SERVER:
                            serverCount > 0
                                ? FormatUtils.fileSize(memory.rss / serverCount)
                                : Intl.tr('other.na', data.lang),
                        HEAP_TOTAL_SIZE: FormatUtils.fileSize(memory.heapTotal),
                        HEAP_TOTAL_SIZE_PER_SERVER:
                            serverCount > 0
                                ? FormatUtils.fileSize(memory.heapTotal / serverCount)
                                : Intl.tr('other.na', data.lang),
                        HEAP_USED_SIZE: FormatUtils.fileSize(memory.heapUsed),
                        HEAP_USED_SIZE_PER_SERVER:
                            serverCount > 0
                                ? FormatUtils.fileSize(memory.heapUsed / serverCount)
                                : Intl.tr('other.na', data.lang),
                        HOSTNAME: os.hostname(),
                        SHARD_ID: (intr.guild?.shardId ?? 0).toString(),
                        SERVER_ID: intr.guild?.id ?? Intl.tr('other.na', data.lang),
                        BOT_ID: intr.client.user?.id,
                        USER_ID: intr.user.id,
                    })
                );
                break;
            }
            default: {
                return;
            }
        }
    }
}

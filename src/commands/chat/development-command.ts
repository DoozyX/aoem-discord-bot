import djs, {
    ApplicationCommandOptionType,
    ChatInputCommandInteraction,
    PermissionFlagsBits,
    PermissionsBitField,
    PermissionsString,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';
import os from 'node:os';
import typescript from 'typescript';

import { CommandDeferType, getBaseChatCommandMetadata } from '@app/commands';
import { ChatCommand } from '@app/commands/command';
import { Config } from '@app/config';
import { DevelopmentCommandName } from '@app/enums';
import { IntlService } from '@app/intl';
import { EventData } from '@app/models/internal-models';
import { FormatUtils, InteractionUtils, ShardUtils } from '@app/utils';

export class DevelopmentCommand implements ChatCommand {
    public name = 'dev';
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];
    public metadata: RESTPostAPIChatInputApplicationCommandsJSONBody = {
        ...getBaseChatCommandMetadata(this.intlService, this.name),
        dm_permission: true,
        default_member_permissions: PermissionsBitField.resolve([
            PermissionFlagsBits.Administrator,
        ]).toString(),
        options: [
            {
                name: this.intlService.tr('arguments.command'),
                name_localizations: this.intlService.getRefLocalizationMap('arguments.command'),
                description: this.intlService.tr('argDescs.devCommand'),
                description_localizations:
                    this.intlService.getRefLocalizationMap('argDescs.devCommand'),
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: this.intlService.tr('devCommandNames.info'),
                        name_localizations:
                            this.intlService.getRefLocalizationMap('devCommandNames.info'),
                        value: DevelopmentCommandName.INFO,
                    },
                ],
                required: true,
            },
        ],
    };

    constructor(private intlService: IntlService) {}

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        if (!Config.developers.includes(intr.user.id)) {
            await InteractionUtils.send(
                intr,
                this.intlService.getEmbed('validationEmbeds.devOnly', data.lang)
            );
            return;
        }

        let arguments_ = {
            command: intr.options.getString(
                this.intlService.tr('arguments.command')
            ) as DevelopmentCommandName,
        };

        switch (arguments_.command) {
            case DevelopmentCommandName.INFO: {
                let shardCount = intr.client.shard?.count ?? 1;
                let serverCount: number;
                if (intr.client.shard) {
                    try {
                        serverCount = await ShardUtils.serverCount(intr.client.shard);
                    } catch (error) {
                        if (error instanceof Error && error.name.includes('ShardingInProcess')) {
                            await InteractionUtils.send(
                                intr,
                                this.intlService.getEmbed('errorEmbeds.startupInProcess', data.lang)
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
                    this.intlService.getEmbed('displayEmbeds.devInfo', data.lang, {
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
                                : this.intlService.tr('other.na', data.lang),
                        HEAP_TOTAL_SIZE: FormatUtils.fileSize(memory.heapTotal),
                        HEAP_TOTAL_SIZE_PER_SERVER:
                            serverCount > 0
                                ? FormatUtils.fileSize(memory.heapTotal / serverCount)
                                : this.intlService.tr('other.na', data.lang),
                        HEAP_USED_SIZE: FormatUtils.fileSize(memory.heapUsed),
                        HEAP_USED_SIZE_PER_SERVER:
                            serverCount > 0
                                ? FormatUtils.fileSize(memory.heapUsed / serverCount)
                                : this.intlService.tr('other.na', data.lang),
                        HOSTNAME: os.hostname(),
                        SHARD_ID: (intr.guild?.shardId ?? 0).toString(),
                        SERVER_ID: intr.guild?.id ?? this.intlService.tr('other.na', data.lang),
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

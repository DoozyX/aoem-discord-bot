import { ActivityType, ShardingManager } from 'discord.js';

import { BotSites, Config } from '@app/config';
import { CustomClient } from '@app/extensions';
import { Logs } from '@app/intl';
import { BotSite } from '@app/models/config-models';
import { HttpService, Logger } from '@app/services';
import { ShardUtils } from '@app/utils';

import { Job } from '.';

export class UpdateServerCountJob extends Job {
    public name = 'Update Server Count';
    public schedule: string = Config.jobs.updateServerCount.schedule;
    public log: boolean = Config.jobs.updateServerCount.log;
    public runOnce: boolean = Config.jobs.updateServerCount.runOnce;
    public initialDelaySecs: number = Config.jobs.updateServerCount.initialDelaySecs;

    private readonly botSites: BotSite[];

    constructor(
        private shardManager: ShardingManager,
        private httpService: HttpService
    ) {
        super();
        this.botSites = BotSites.filter(botSite => botSite.enabled);
    }

    public async run(): Promise<void> {
        let serverCount = await ShardUtils.serverCount(this.shardManager);
        let shardCount = ShardUtils.shardIds(this.shardManager)?.length.toString() ?? '0';

        let type = ActivityType.Streaming;
        let name = `to ${serverCount.toLocaleString()} servers`;

        await this.shardManager.broadcastEval(
            (client, context) => {
                let customClient = client as CustomClient;
                return customClient.setPresence(context.type, context.name, context.url);
            },
            { context: { type, name, url: 'TODO' } }
        );

        Logger.info(
            Logs.info.updatedServerCount.replaceAll('{SERVER_COUNT}', serverCount.toLocaleString())
        );

        for (let botSite of this.botSites) {
            try {
                let body = JSON.parse(
                    botSite.body
                        .replaceAll('{{SERVER_COUNT}}', serverCount.toString())
                        .replaceAll('{{SHARD_COUNT}}', shardCount)
                );
                let response = await this.httpService.post(
                    botSite.url,
                    botSite.authorization,
                    body
                );

                if (!response.ok) {
                    throw response;
                }
            } catch (error) {
                Logger.error(
                    Logs.error.updatedServerCountSite.replaceAll('{BOT_SITE}', botSite.name),
                    error
                );
                continue;
            }

            Logger.info(Logs.info.updatedServerCountSite.replaceAll('{BOT_SITE}', botSite.name));
        }
    }
}

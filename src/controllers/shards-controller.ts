import { ActivityType, ShardingManager } from 'discord.js';
import { Request, Response, Router } from 'express';
import router from 'express-promise-router';

import { Config } from '@app/config';
import { CustomClient } from '@app/extensions';
import { Logs } from '@app/intl';
import { mapClass } from '@app/middleware';
import {
    GetShardsResponse,
    SetShardPresencesRequest,
    ShardInfo,
    ShardStats,
} from '@app/models/cluster-api';
import { Logger } from '@app/services';

import { Controller } from '.';

export class ShardsController implements Controller {
    public path = '/shards';
    public router: Router = router();
    public authToken: string = Config.api.secret;

    constructor(private shardManager: ShardingManager) {}

    public register(): void {
        this.router.get('/', (request, response) => this.getShards(request, response));
        this.router.put('/presence', mapClass(SetShardPresencesRequest), (request, response) =>
            this.setShardPresences(request, response)
        );
    }

    private async getShards(request: Request, response: Response): Promise<void> {
        let shardDatas = await Promise.all(
            this.shardManager.shards.map(async shard => {
                let shardInfo: ShardInfo = {
                    id: shard.id,
                    ready: shard.ready,
                    error: false,
                };

                try {
                    let uptime = (await shard.fetchClientValue('uptime')) as number;
                    shardInfo.uptimeSecs = Math.floor(uptime / 1000);
                } catch (error) {
                    Logger.error(Logs.error.managerShardInfo, error);
                    shardInfo.error = true;
                }

                return shardInfo;
            })
        );

        let stats: ShardStats = {
            shardCount: this.shardManager.shards.size,
            uptimeSecs: Math.floor(process.uptime()),
        };

        let responseBody: GetShardsResponse = {
            shards: shardDatas,
            stats,
        };
        response.status(200).json(responseBody);
    }

    private async setShardPresences(request: Request, response: Response): Promise<void> {
        let requestBody: SetShardPresencesRequest = response.locals.input;

        await this.shardManager.broadcastEval(
            (client, context) => {
                let customClient = client as CustomClient;
                return customClient.setPresence(context.type, context.name, context.url);
            },
            {
                context: {
                    type: ActivityType[requestBody.type],
                    name: requestBody.name,
                    url: requestBody.url,
                },
            }
        );

        response.sendStatus(200);
    }
}

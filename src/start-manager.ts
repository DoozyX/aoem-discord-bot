import { ShardingManager, ShardingManagerMode } from 'discord.js';

import 'reflect-metadata';

import { Config, Debug } from '@app/config';
import { Logs } from '@app/intl';

import { GuildsController, RootController, ShardsController } from './controllers';
import { Job, UpdateServerCountJob } from './jobs';
import { Api } from './models/api';
import { Manager } from './models/manager';
import { HttpService, JobService, Logger, MasterApiService } from './services';
import { MathUtils, ShardUtils } from './utils';

async function start(): Promise<void> {
    Logger.info(Logs.info.appStarted);

    // Dependencies
    let httpService = new HttpService();
    let masterApiService = new MasterApiService(httpService);
    if (Config.clustering.enabled) {
        await masterApiService.register();
    }

    // Sharding
    let shardList: number[];
    let totalShards: number;
    try {
        if (Config.clustering.enabled) {
            let responseBody = await masterApiService.login();
            shardList = responseBody.shardList;
            let requiredShards = await ShardUtils.requiredShardCount(Config.client.token);
            totalShards = Math.max(requiredShards, responseBody.totalShards);
        } else {
            let recommendedShards = await ShardUtils.recommendedShardCount(
                Config.client.token,
                Config.sharding.serversPerShard
            );
            shardList = MathUtils.range(0, recommendedShards);
            totalShards = recommendedShards;
        }
    } catch (error) {
        await Logger.error(Logs.error.retrieveShards, error);
        return;
    }

    if (shardList.length === 0) {
        Logger.warn(Logs.warn.managerNoShards);
        return;
    }

    let shardManager = new ShardingManager('dist/start-bot', {
        token: Config.client.token,
        mode: Debug.override.shardMode.enabled
            ? (Debug.override.shardMode.value as ShardingManagerMode)
            : 'process',
        respawn: true,
        totalShards,
        shardList,
    });

    // Jobs
    let jobs: Job[] = [
        Config.clustering.enabled ? undefined : new UpdateServerCountJob(shardManager, httpService),
        // TODO: Add new jobs here
    ].filter(Boolean);

    let manager = new Manager(shardManager, new JobService(jobs));

    // API
    let guildsController = new GuildsController(shardManager);
    let shardsController = new ShardsController(shardManager);
    let rootController = new RootController();
    let api = new Api([guildsController, shardsController, rootController]);

    // Start
    await manager.start();
    await api.start();
    if (Config.clustering.enabled) {
        await masterApiService.ready();
    }
}

process.on('unhandledRejection', (reason, _promise) => {
    Logger.error(Logs.error.unhandledRejection, reason);
});

start().catch((error: Error) => {
    Logger.error(Logs.error.unspecified, error);
});

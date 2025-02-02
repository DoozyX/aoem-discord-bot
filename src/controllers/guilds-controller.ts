import { ShardingManager } from 'discord.js';
import { Request, Response, Router } from 'express';
import router from 'express-promise-router';

import { Config } from '@app/config';
import { GetGuildsResponse } from '@app/models/cluster-api';

import { Controller } from '.';

export class GuildsController implements Controller {
    public path = '/guilds';
    public router: Router = router();
    public authToken: string = Config.api.secret;

    constructor(private shardManager: ShardingManager) {}

    public register(): void {
        this.router.get('/', (request, response) => this.getGuilds(request, response));
    }

    private async getGuilds(request: Request, response: Response): Promise<void> {
        const result = await this.shardManager.broadcastEval(client => [
            ...client.guilds.cache.keys(),
        ]);
        let guilds: string[] = [...new Set(result.flat())];

        let guildsResponse: GetGuildsResponse = {
            guilds,
        };
        response.status(200).json(guildsResponse);
    }
}

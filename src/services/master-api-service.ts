import { URL } from 'node:url';

import { Config } from '@app/config';
import {
    LoginClusterResponse,
    RegisterClusterRequest,
    RegisterClusterResponse,
} from '@app/models/master-api';

import { HttpService } from '.';

export class MasterApiService {
    private clusterId: string;

    constructor(private httpService: HttpService) {}

    public async register(): Promise<void> {
        let requestBody: RegisterClusterRequest = {
            shardCount: Config.clustering.shardCount,
            callback: {
                url: Config.clustering.callbackUrl,
                token: Config.api.secret,
            },
        };

        let response = await this.httpService.post(
            new URL('/clusters', Config.clustering.masterApi.url),
            Config.clustering.masterApi.token,
            requestBody
        );

        if (!response.ok) {
            throw response;
        }

        let responseBody = (await response.json()) as RegisterClusterResponse;
        this.clusterId = responseBody.id;
    }

    public async login(): Promise<LoginClusterResponse> {
        let response = await this.httpService.put(
            new URL(`/clusters/${this.clusterId}/login`, Config.clustering.masterApi.url),
            Config.clustering.masterApi.token
        );

        if (!response.ok) {
            throw response;
        }

        return (await response.json()) as LoginClusterResponse;
    }

    public async ready(): Promise<void> {
        let response = await this.httpService.put(
            new URL(`/clusters/${this.clusterId}/ready`, Config.clustering.masterApi.url),
            Config.clustering.masterApi.token
        );

        if (!response.ok) {
            throw response;
        }
    }
}

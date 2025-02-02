import express, { Express } from 'express';
import { promisify } from 'node:util';

import { Config } from '@app/config';
import { Controller } from '@app/controllers';
import { Logs } from '@app/intl';
import { checkAuth, handleError } from '@app/middleware';
import { Logger } from '@app/services';

export class Api {
    private readonly app: Express;

    constructor(public controllers: Controller[]) {
        this.app = express();
        this.app.use(express.json());
        this.setupControllers();
        this.app.use(handleError());
    }

    public async start(): Promise<void> {
        let listen = promisify(this.app.listen.bind(this.app));
        await listen(Config.api.port);
        Logger.info(Logs.info.apiStarted.replaceAll('{PORT}', Config.api.port.toString()));
    }

    private setupControllers(): void {
        for (let controller of this.controllers) {
            if (controller.authToken) {
                controller.router.use(checkAuth(controller.authToken));
            }
            controller.register();
            this.app.use(controller.path, controller.router);
        }
    }
}

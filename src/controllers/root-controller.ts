import { Request, Response, Router } from 'express';
import router from 'express-promise-router';

import { Controller } from '.';

export class RootController implements Controller {
    public path = '/';
    public router: Router = router();

    public register(): void {
        this.router.get('/', (request, response) => this.get(request, response));
    }

    private async get(request: Request, response: Response): Promise<void> {
        response.status(200).json({ name: 'Discord Bot Cluster API', author: 'Kevin Novak' });
    }
}

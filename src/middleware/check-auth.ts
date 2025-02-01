import { RequestHandler } from 'express';

export function checkAuth(token: string): RequestHandler {
    return (request, response, next) => {
        if (request.headers.authorization !== token) {
            response.sendStatus(401);
            return;
        }
        next();
    };
}

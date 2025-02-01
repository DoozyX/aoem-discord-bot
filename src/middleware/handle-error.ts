import { ErrorRequestHandler } from 'express';
import { createRequire } from 'node:module';

import { Logger } from '../services';

const require = createRequire(import.meta.url);
let Logs = require('../../lang/logs.json');

export function handleError(): ErrorRequestHandler {
    return (error, request, response, _next) => {
        Logger.error(
            Logs.error.apiRequest
                .replaceAll('{HTTP_METHOD}', request.method)
                .replaceAll('{URL}', request.url),
            error
        );
        response.status(500).json({ error: true, message: error.message });
    };
}

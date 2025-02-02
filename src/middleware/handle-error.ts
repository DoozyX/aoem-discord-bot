import { ErrorRequestHandler } from 'express';

import { Logs } from '@app/intl';
import { Logger } from '@app/services';

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

import { DiscordAPIError } from 'discord.js';
import { Response } from 'node-fetch';
import pino from 'pino';

import { Config } from '@app/config';

let logger = pino(
    {
        formatters: {
            level: label => {
                return { level: label };
            },
        },
    },
    Config.logging.pretty
        ? pino.transport({
              target: 'pino-pretty',
              options: {
                  colorize: true,
                  ignore: 'pid,hostname',
                  translateTime: 'yyyy-mm-dd HH:MM:ss.l',
              },
          })
        : undefined
);

export class Logger {
    private static shardId: number;

    public static info(message: string, object?: any): void {
        if (object) {
            logger.info(object, message);
        } else {
            logger.info(message);
        }
    }

    public static warn(message: string, object?: any): void {
        if (object) {
            logger.warn(object, message);
        } else {
            logger.warn(message);
        }
    }

    public static async error(message: string, object?: any): Promise<void> {
        // Log just a message if no error object
        if (!object) {
            logger.error(message);
            return;
        }

        // Otherwise log details about the error
        if (typeof object === 'string') {
            logger
                .child({
                    message: object,
                })
                .error(message);
        } else if (object instanceof Response) {
            let responseText: string;
            try {
                responseText = await object.text();
            } catch {
                // Ignore
                return;
            }
            logger
                .child({
                    path: object.url,
                    statusCode: object.status,
                    statusName: object.statusText,
                    headers: object.headers.raw(),
                    body: responseText,
                })
                .error(message);
        } else if (object instanceof DiscordAPIError) {
            logger
                .child({
                    message: object.message,
                    code: object.code,
                    statusCode: object.status,
                    method: object.method,
                    url: object.url,
                    stack: object.stack,
                })
                .error(message);
        } else {
            logger.error(object, message);
        }
    }

    public static setShardId(shardId: number): void {
        if (this.shardId !== shardId) {
            this.shardId = shardId;
            logger = logger.child({ shardId });
        }
    }
}

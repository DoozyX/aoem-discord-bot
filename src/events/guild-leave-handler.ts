import { Guild } from 'discord.js';

import { Logs } from '@app/intl';
import { Logger } from '@app/services';

import { EventHandler } from '.';

export class GuildLeaveHandler implements EventHandler {
    public async process(guild: Guild): Promise<void> {
        Logger.info(
            Logs.info.guildLeft
                .replaceAll('{GUILD_NAME}', guild.name)
                .replaceAll('{GUILD_ID}', guild.id)
        );
    }
}

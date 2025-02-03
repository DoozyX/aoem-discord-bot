import {
    Channel,
    CommandInteractionOptionResolver,
    Guild,
    PartialDMChannel,
    User,
} from 'discord.js';

import { Language } from '@app/models/enum-helpers/language';
import { EventData } from '@app/models/internal-models';

export class EventDataService {
    public async create(
        options: {
            user?: User;
            channel?: Channel | PartialDMChannel | null;
            guild?: Guild | null;
            args?: Omit<CommandInteractionOptionResolver, 'getMessage' | 'getFocused'>;
        } = {}
    ): Promise<EventData> {
        // TODO: Retrieve any data you want to pass along in events

        // Event language
        let lang =
            options.guild?.preferredLocale &&
            Language.Enabled.includes(options.guild.preferredLocale)
                ? options.guild.preferredLocale
                : Language.Default;

        // Guild language
        let langGuild =
            options.guild?.preferredLocale &&
            Language.Enabled.includes(options.guild.preferredLocale)
                ? options.guild.preferredLocale
                : Language.Default;

        return new EventData(lang, langGuild);
    }
}

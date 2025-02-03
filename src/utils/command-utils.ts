import {
    CommandInteraction,
    GuildChannel,
    MessageComponentInteraction,
    ModalSubmitInteraction,
    ThreadChannel,
} from 'discord.js';

import { Command } from '@app/commands';
import { IntlService } from '@app/intl';
import { EventData } from '@app/models/internal-models';

import { FormatUtils, InteractionUtils } from '.';

export class CommandUtils {
    public static async runChecks(
        intlService: IntlService,
        command: Command,
        intr: CommandInteraction | MessageComponentInteraction | ModalSubmitInteraction,
        data: EventData
    ): Promise<boolean> {
        if (command.cooldown) {
            let limited = command.cooldown.take(intr.user.id);
            if (limited) {
                await InteractionUtils.send(
                    intr,
                    intlService.getEmbed('validationEmbeds.cooldownHit', data.lang, {
                        AMOUNT: command.cooldown.amount.toLocaleString(data.lang),
                        INTERVAL: FormatUtils.duration(command.cooldown.interval, data.lang),
                    })
                );
                return false;
            }
        }

        if (
            (intr.channel instanceof GuildChannel || intr.channel instanceof ThreadChannel) &&
            !(
                intr.client.user &&
                intr.channel.permissionsFor(intr.client.user)?.has(command.requireClientPerms)
            )
        ) {
            await InteractionUtils.send(
                intr,
                intlService.getEmbed('validationEmbeds.missingClientPerms', data.lang, {
                    PERMISSIONS: command.requireClientPerms
                        .map(perm => `**${intlService.tr(`permissions.${perm}`)}**`)
                        .join(', '),
                })
            );
            return false;
        }

        return true;
    }
}

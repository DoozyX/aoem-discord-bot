import { ChatInputCommandInteraction, EmbedBuilder, PermissionsString } from 'discord.js';

import { Command, CommandDeferType } from '@app/commands';
import { InfoOption } from '@app/enums';
import { Language } from '@app/models/enum-helpers';
import { EventData } from '@app/models/internal-models';
import { Intl } from '@app/services';
import { InteractionUtils } from '@app/utils';

export class InfoCommand implements Command {
    public names = [Intl.tr('chatCommands.info')];
    public deferType = CommandDeferType.HIDDEN;
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let arguments_ = {
            option: intr.options.getString(Intl.tr('arguments.option')) as InfoOption,
        };

        let embed: EmbedBuilder;
        switch (arguments_.option) {
            case InfoOption.ABOUT: {
                embed = Intl.getEmbed('displayEmbeds.about', data.lang);
                break;
            }
            case InfoOption.TRANSLATE: {
                embed = Intl.getEmbed('displayEmbeds.translate', data.lang);
                for (let langCode of Language.Enabled) {
                    embed.addFields([
                        {
                            name: Language.Data[langCode].nativeName,
                            value: Intl.tr('meta.translators', langCode),
                        },
                    ]);
                }
                break;
            }
            default: {
                return;
            }
        }

        await InteractionUtils.send(intr, embed);
    }
}

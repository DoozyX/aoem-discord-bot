import { EmbedBuilder, Locale, LocalizationMap, resolveColor } from 'discord.js';
import { Linguini, TypeMapper, TypeMappers, Utils } from 'linguini';
import path from 'node:path';

import { Language } from '@app/models/enum-helpers';

export class IntlService {
    private static linguini = new Linguini(
        // TODO: check
        // eslint-disable-next-line unicorn/prefer-module
        path.resolve(__dirname, '../../lang'),
        'lang'
    );

    public static getEmbed(
        location: string,
        langCode: Locale = Language.Default,
        variables?: { [name: string]: string }
    ): EmbedBuilder {
        return this.linguini.get(location, langCode, this.embedTm, variables);
    }

    public static getRegex(location: string, langCode: Locale = Language.Default): RegExp {
        return this.linguini.get(location, langCode, TypeMappers.RegExp);
    }

    public static tr(
        location: string,
        langCode: Locale = Language.Default,
        variables?: { [name: string]: string }
    ): string {
        return this.linguini.getRef(location, langCode, variables);
    }

    public static getRefLocalizationMap(
        location: string,
        variables?: { [name: string]: string }
    ): LocalizationMap {
        let object = {};
        for (let langCode of Language.Enabled) {
            object[langCode] = this.tr(location, langCode, variables);
        }
        return object;
    }

    public static getCom(location: string, variables?: { [name: string]: string }): string {
        return this.linguini.getCom(location, variables);
    }

    private static embedTm: TypeMapper<EmbedBuilder> = (jsonValue: any) => {
        return new EmbedBuilder({
            author: jsonValue.author,
            title: Utils.join(jsonValue.title, '\n'),
            url: jsonValue.url,
            thumbnail: {
                url: jsonValue.thumbnail,
            },
            description: Utils.join(jsonValue.description, '\n'),
            fields: jsonValue.fields?.map(field => ({
                name: Utils.join(field.name, '\n'),
                value: Utils.join(field.value, '\n'),
                inline: field.inline ?? false,
            })),
            image: {
                url: jsonValue.image,
            },
            footer: {
                text: Utils.join(jsonValue.footer?.text, '\n'),
                iconURL: jsonValue.footer?.icon,
            },
            timestamp: jsonValue.timestamp ? Date.now() : undefined,
            color: resolveColor(jsonValue.color ?? IntlService.getCom('colors.default')),
        });
    };
}

import enCommon from '@locales/en/common.json';
import enData from '@locales/en/data.json';
import enRefs from '@locales/en/refs.json';
import { EmbedBuilder, HexColorString, Locale, LocalizationMap, resolveColor } from 'discord.js';
import { createInstance, i18n, TFunction } from 'i18next';

import { Language } from '@app/models/enum-helpers';
import { Logger } from '@app/services';
import { StringUtils } from '@app/utils/string-utils';

interface TranslatedEmbed {
    author?: { name: string; url: string };
    title?: string | string[];
    url?: string;
    thumbnail?: string;
    description?: string | string[];
    fields?: {
        name?: string | string[];
        value?: string | string[];
        inline?: boolean;
    }[];
    image?: string;
    footer?: {
        text?: string | string[];
        icon?: string;
    };
    timestamp?: boolean;
    color?: string;
}

export class IntlService {
    private i18nextInstance: i18n;

    constructor() {
        this.i18nextInstance = createInstance(
            {
                debug: true,
                fallbackLng: 'en',
                defaultNS: 'data',
                resources: {
                    en: {
                        data: enData,
                        refs: enRefs,
                        common: enCommon,
                    },
                },
            },
            (error: Error, _t: TFunction) => {
                if (error) {
                    Logger.error(error.message);
                }
            }
        );
    }
    public init(): void {}

    public getEmbed(
        location: string,
        langCode: Locale = Language.Default,
        variables?: { [name: string]: string }
    ): EmbedBuilder {
        const jsonValue = this.i18nextInstance.t(location as any, {
            returnObjects: true,
            lng: langCode,
            ns: 'data',
            ...variables,
        }) as TranslatedEmbed;
        if (!jsonValue) {
            return new EmbedBuilder();
        }
        return new EmbedBuilder({
            author: jsonValue.author,
            title: StringUtils.Join(jsonValue.title, '\n') ?? '',
            url: jsonValue.url,
            thumbnail: {
                url: jsonValue.thumbnail ?? '',
            },
            description: StringUtils.Join(jsonValue.description, '\n'),
            fields: jsonValue.fields?.map((field: any) => ({
                name: StringUtils.Join(field.name, '\n') ?? '',
                value: StringUtils.Join(field.value, '\n') ?? '',
                inline: field.inline ?? false,
            })),
            image: {
                url: jsonValue.image ?? '',
            },
            footer: {
                text: StringUtils.Join(jsonValue.footer?.text, '\n') ?? '',
                iconURL: jsonValue.footer?.icon,
            },
            timestamp: jsonValue.timestamp ? Date.now() : undefined,
            color: resolveColor(
                (jsonValue.color as HexColorString) ??
                    (this.getCom('colors.default') as HexColorString) ??
                    '#ffffff'
            ),
        });
    }

    public getRegex(location: string, langCode: Locale = Language.Default): RegExp {
        return new RegExp(this.i18nextInstance.t(location as any, { lng: langCode, ns: 'data' }));
    }

    public tr(
        location: string,
        langCode: Locale = Language.Default,
        variables?: { [name: string]: string }
    ): string {
        return this.i18nextInstance.t(location as any, {
            lng: langCode,
            ns: 'refs',
            ...variables,
        });
    }

    public getRefLocalizationMap(
        location: string,
        variables?: { [name: string]: string }
    ): LocalizationMap {
        let object: Partial<LocalizationMap> = {};
        for (let langCode of Language.Enabled) {
            object[langCode] = this.tr(location, langCode, variables);
        }
        return object;
    }

    public getCom(location: string, variables?: { [name: string]: string }): string {
        return this.i18nextInstance.t(location, {
            ...variables,
            defaultValue: '',
            ns: 'common',
        });
    }
}

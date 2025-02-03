import enCommands from '@locales/en/refs.json';
import enCommon from '@locales/en/common.json';
import enData from '@locales/en/data.json';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'ns1';
        resources: {
            refs: typeof enCommands;
            common: typeof enCommon;
            data: typeof enData;
        };
    }
}

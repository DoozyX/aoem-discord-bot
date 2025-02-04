import enCommon from '@locales/en/common.json';
import enData from '@locales/en/data.json';
import enCommands from '@locales/en/refs.json';

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

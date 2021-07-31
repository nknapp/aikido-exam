import 'react-i18next';

export interface TranslationSchema {
    title: string;
}


declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation';
        resources: {
            translation: TranslationSchema;
        };
    };
};
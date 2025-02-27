import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import dayjs from 'dayjs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { th, en } from './locales';
require('dayjs/locale/th.js');

const I18N_NAME_SPACE = 'translation';

AsyncStorage.getItem('locale')
    .then((locale) => {
        if (locale) {
            dayjs.locale(locale);
            i18n.changeLanguage(locale);
        } else {
            dayjs.locale('th');
            i18n.changeLanguage('th');
        }
    })
    .catch((err) => {
        dayjs.locale('th');
        i18n.changeLanguage('th');
    });

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        th: { translation: th }
    },
    lng: 'th',
    fallbackLng: 'en',
    ns: I18N_NAME_SPACE,
    interpolation: {
        escapeValue: false
    }
});

export const changeLanguage = (lang: string) => {
    AsyncStorage.setItem('locale', lang);
    dayjs.locale(lang);
    i18n.changeLanguage(lang);
    return { currentLanguage: lang };
};

export const currentLanguage = () => i18n.language;

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules/polyfill';

import CHAT_EN from "../translate/en/chat.json";
import CHAT_VI from "../translate/vn/chat.json";
import LOGIN_EN from "../translate/en/login.json"
import LOGIN_VI from "../translate/vn/login.json"
import CONTACT_EN from "../translate/en/contact.json"
import CONTACT_VI from "../translate/vn/contact.json"
import SETTINGS_EN from "../translate/en/setting.json"
import SETTINGS_VI from "../translate/vn/setting.json"
import NAVIGATION_EN from "../translate/en/navigation.json"
import NAVIGATION_VI from "../translate/vn/navigation.json"
import SIGNUP_EN from "../translate/en/signup.json";
import SIGNUP_VI from "../translate/vn/signup.json";
export const locales = {
    en: 'English',
    vi: 'Tiếng Việt',
}
const resources = {
    en: {
        chat: CHAT_EN,
        login: LOGIN_EN,
        contact: CONTACT_EN,
        setting: SETTINGS_EN,
        navigation: NAVIGATION_EN,
        signup: SIGNUP_EN
    },
    vi: {
        chat: CHAT_VI,
        login: LOGIN_VI,
        contact: CONTACT_VI,
        setting: SETTINGS_VI,
        navigation: NAVIGATION_VI,
        signup: SIGNUP_VI
    }
}
const defaultNS = 'login';
i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    ns: ['chat', 'login', 'contact', 'setting', 'navigation'],
    fallbackLng: 'vi',
    defaultNS,
    interpolation: {
        escapeValue: false
    }
});
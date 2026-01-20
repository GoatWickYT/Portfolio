import { useTranslation } from 'react-i18next';
import './LanguageSwitch.css';
import { useEffect } from 'react';

const LanguageSwitch: React.FC = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    useEffect(() => {
        const language = localStorage.getItem('language');
        if (language) i18n.changeLanguage(language);
    }, []);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'hu' : 'en');
        localStorage.setItem('language', i18n.language === 'en' ? 'hu' : 'en');
    };

    return (
        <main
            className="LanguageSwitch"
            onClick={() => toggleLanguage()}
            aria-label={t('lang-title')}
            title={t('lang-title')}
        >
            {i18n.language !== 'en' ? 'HU' : 'EN'}
        </main>
    );
};

export default LanguageSwitch;

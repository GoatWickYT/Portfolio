import { useEffect } from 'react';
import './ThemeSwitch.css';
import { useTranslation } from 'react-i18next';

const ThemeSwitch: React.FC = () => {
    const { t } = useTranslation();
    useEffect(() => {
        const stored = localStorage.getItem('theme');

        if (stored === 'light' || stored === 'dark') {
            document.documentElement.setAttribute('data-theme', stored);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        }
    }, []);

    const toggleTheme = () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    };

    return (
        <main
            className="ThemeSwitch"
            onClick={toggleTheme}
            aria-label={t('theme-title')}
            title={t('theme-title')}
        >
            🌗
        </main>
    );
};

export default ThemeSwitch;

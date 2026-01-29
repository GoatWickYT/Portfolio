import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SunIcon from '../svgs/SunIcon';
import MoonIcon from '../svgs/MoonIcon';

const ThemeSwitch: React.FC = () => {
    const { t } = useTranslation();
    const [theme, setTheme] = useState(
        document.documentElement.getAttribute('data-theme') || 'light',
    );
    useEffect(() => {
        const stored = localStorage.getItem('theme');

        if (stored === 'light' || stored === 'dark') {
            document.documentElement.setAttribute('data-theme', stored);
            setTheme(stored);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
            setTheme(prefersDark ? 'dark' : 'light');
        }
    }, []);

    const toggleTheme = () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', next);
        setTheme(next);
        localStorage.setItem('theme', next);
    };

    return (
        <button
            className="ThemeSwitch Switch"
            onClick={toggleTheme}
            aria-label={t('theme-title')}
            title={t('theme-title')}
            style={{ bottom: '100px' }}
        >
            {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

export default ThemeSwitch;

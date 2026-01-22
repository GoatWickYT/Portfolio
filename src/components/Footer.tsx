import { Link } from 'react-router-dom';
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <footer className="Footer">
            <ul className="Links">
                <li>
                    <Link to={'/'}>{t('footer-main')}</Link>
                </li>
                <li>
                    <Link to={'/about'}>{t('footer-about')}</Link>
                </li>
                <li>
                    <Link to={'/projects'}>{t('footer-projects')}</Link>
                </li>
                <li>
                    <Link to={'/techs'}>{t('footer-techs')}</Link>
                </li>
            </ul>
            <ul className="Contacts">
                <li>
                    <a
                        href={'https://discord.com/users/1402166722651357204'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/Discord.webp" alt="Discord icon" />
                        Discord
                    </a>
                </li>
                <li>
                    <a
                        href={'mailto:wiattila8+portfolio@gmail.com'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/Gmail.webp" alt="Email icon" />
                        Email
                    </a>
                </li>
                <li>
                    <a
                        href={'https://github.com/GoatWickYT'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/Github.png" alt="Github icon" />
                        Github
                    </a>
                </li>
                <li>
                    <a
                        href={'https://www.facebook.com/profile.php?id=100059273542619'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/Facebook.png" alt="Facebook icon" />
                        Facebook
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;

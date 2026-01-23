import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <section className="HeroSection">
            <section className="Content">
                <section className="Info">
                    <h1>{t('main-hero-intro')}</h1>
                    <p>{t('main-hero-sub1')}</p>
                    <p>{t('main-hero-sub2')}</p>
                    <button onClick={() => navigate('/about')}>{t('main-hero-more')}</button>
                </section>
                <img src="/profile.jpg" alt={t('main-hero-image')} title={t('main-hero-image')} />
            </section>
        </section>
    );
};

export default HeroSection;

import { useNavigate } from 'react-router-dom';
import './TechSection.css';
import { useTranslation } from 'react-i18next';

const TechSection: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <section className="TechSection">
            <section className="Content">
                <section className="Tech">
                    <h1>{t('tech-title')}</h1>
                    <section>
                        <p>{t('tech-description')}</p>
                    </section>
                    <div className="Techs">
                        <img src="/Typescript.png" alt="" />
                        <img src="/Javascript.png" alt="" />
                        <img src="/HTML.png" alt="" />
                        <img src="/CSS.png" alt="" />
                        <img src="/Csharp.png" alt="" />

                        <img src="/Phaser.png" alt="" />
                        <img src="/UE.png" alt="" />
                        <img src="/Unity.png" alt="" />
                        <img src="/React.svg" alt="" />
                        <img src="/Vite.png" alt="" />

                        <img src="/MongoDB.png" alt="" />
                        <img src="/MySql.svg" alt="" />
                        <img src="/Node.png" alt="" />
                        <img src="/Docker.webp" alt="" />
                        <img src="/Git.png" alt="" />
                    </div>
                    <button onClick={() => navigate('/techs')}>{t('tech-more')}</button>
                </section>
            </section>
        </section>
    );
};

export default TechSection;

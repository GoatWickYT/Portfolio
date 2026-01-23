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
                    <h1>{t('main-page-tech-title')}</h1>
                    <section>
                        <p>{t('main-page-tech-description')}</p>
                    </section>
                    <div className="Techs">
                        <img src="/Typescript.png" alt="Typescript icon" />
                        <img src="/Javascript.png" alt="JavaScrip icon" />
                        <img src="/HTML.png" alt="HTML icon" />
                        <img src="/CSS.png" alt="CSS icon" />
                        <img src="/Csharp.png" alt="Csharp icon" />

                        <img src="/Phaser.png" alt="Phaser icon" />
                        <img src="/UE.png" alt="Unreal Engine icon" />
                        <img src="/Unity.png" alt="Unity icon" />
                        <img src="/React.png" alt="React icon" />
                        <img src="/Vite.png" alt="Vite icon" />

                        <img src="/MongoDB.png" alt="MongoDB icon" />
                        <img src="/MySql.svg" alt="MySQL icon" />
                        <img src="/Node.png" alt="Node.js icon icon" />
                        <img src="/Docker.webp" alt="Docker icon" />
                        <img src="/Git.png" alt="Git icon" />
                    </div>
                    <button onClick={() => navigate('/techs')}>{t('main-page-tech-more')}</button>
                </section>
            </section>
        </section>
    );
};

export default TechSection;

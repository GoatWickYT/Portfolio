import { useNavigate } from 'react-router-dom';
import './ProjectSection.css';
import { useTranslation } from 'react-i18next';

const ProjectSection: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <section className="ProjectSection">
            <section className="Content">
                <section className="Info Best">
                    <h1>{t('project-title-featured')}</h1>
                    <section>
                        <h2>{t('project-title-realm')}</h2>
                        <p>
                            {t('project-description-realm')
                                .split('\n')
                                .map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                        </p>
                    </section>
                    <button onClick={() => navigate('/projects')}>{t('project-more-best')}</button>
                </section>
                <img src="/REALM.icon.png" alt="" />
            </section>

            <section className="Content">
                <section className="Info Other">
                    <h1>{t('project-title-other')}</h1>
                    <div>
                        <section className="TextImageContainer">
                            <h2>{t('project-title-dgd')}</h2>
                            <p>
                                {t('project-description-dgd')
                                    .split('\n')
                                    .map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                            </p>
                            <button onClick={() => navigate('/projects')}>
                                {t('project-more-dgd')}
                            </button>
                        </section>
                        <img src="/DGD.icon.png" alt="" />
                    </div>
                    <div>
                        <section>
                            <h2>{t('project-title-agentq')}</h2>
                            <p>
                                {t('project-description-agentq')
                                    .split('\n')
                                    .map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                            </p>
                            <button onClick={() => navigate('/projects')}>
                                {t('project-more-agentq')}
                            </button>
                        </section>
                        <img src="/AgentQ.icon.svg" alt="" />
                    </div>
                </section>
            </section>
        </section>
    );
};

export default ProjectSection;

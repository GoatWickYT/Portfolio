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
                    <h1>{t('main-project-title-featured')}</h1>
                    <section>
                        <h2>{t('main-project-title-realm')}</h2>
                        <p>
                            {t('main-project-description-realm')
                                .split('\n')
                                .map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                        </p>
                    </section>
                    <button onClick={() => navigate('/projects', { state: { openUp: 'realm' } })}>
                        {t('main-project-more-best')}
                    </button>
                </section>
                <img src="/REALM.png" alt="REALM icon" />
            </section>

            <section className="Content">
                <section className="Info Other">
                    <h1>{t('main-project-title-other')}</h1>
                    <div>
                        <section className="TextImageContainer">
                            <h2>{t('main-project-title-deal-gone-dark')}</h2>
                            <p>
                                {t('main-project-description-deal-gone-dark')
                                    .split('\n')
                                    .map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                            </p>
                            <button
                                onClick={() => navigate('/projects', { state: { openUp: 'dgd' } })}
                            >
                                {t('main-project-more-deal-gone-dark')}
                            </button>
                        </section>
                        <img src="/DGD.png" alt="Deal Gone Dark icon" />
                    </div>
                    <div>
                        <section>
                            <h2>{t('main-project-title-agent-q')}</h2>
                            <p>
                                {t('main-project-description-agent-q')
                                    .split('\n')
                                    .map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                            </p>
                            <button
                                onClick={() =>
                                    navigate('/projects', { state: { openUp: 'agentq' } })
                                }
                            >
                                {t('main-project-more-agent-q')}
                            </button>
                        </section>
                        <img src="/AgentQ.svg" alt="Agent Q icon" />
                    </div>
                </section>
            </section>
        </section>
    );
};

export default ProjectSection;

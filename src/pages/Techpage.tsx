import { useTranslation } from 'react-i18next';
import ToolDesc from '../components/ToolDesc';
import './Techpage.css';

const Techpage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <main className="Techpage">
            <section className="Intro">
                <h1>{t('page-tech-title')}</h1>
                <h2>{t('page-tech-subtitle')}</h2>
            </section>
            <ToolDesc
                title="Languages"
                tools={[
                    {
                        image: 'Javascript.png',
                        name: 'JavaScript - (2021)',
                        desc: 'javascript-desc',
                        projects: ['school-js', 'school-web'],
                    },
                    {
                        name: 'TypeScript - (2025)',
                        image: 'Typescript.png',
                        desc: 'typescript-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                    {
                        image: 'Csharp.png',
                        name: 'C# - (2019, 2022)',
                        desc: 'csharp-desc',
                        projects: ['school-cs', 'unity'],
                    },
                    {
                        name: 'HTML - (2021)',
                        image: 'HTML.png',
                        desc: 'html-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                    {
                        name: 'CSS - (2021)',
                        image: 'CSS.png',
                        desc: 'css-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                ]}
            />
            <ToolDesc
                title="Game Engines"
                tools={[
                    { image: 'Unity.png', name: 'Unity - (2019)', desc: 'unity-desc' },
                    { image: 'UE.png', name: 'Unreal Engine - (2019)', desc: 'unreal-engine-desc' },
                    {
                        image: 'Phaser.png',
                        name: 'Phaser - (2025)',
                        desc: 'phaser-desc',
                        projects: ['deal-gone-dark'],
                    },
                ]}
            />
            <ToolDesc
                title="Frameworks & Libraries"
                tools={[
                    {
                        image: 'React.png',
                        name: 'React - (2025)',
                        desc: 'react-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                    {
                        image: 'Node.png',
                        name: 'Node.js - (2022)',
                        desc: 'node-js-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                    {
                        image: 'Express.webp',
                        name: 'Express.js - (2023)',
                        desc: 'express-js-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                    {
                        image: 'Vite.png',
                        name: 'Vite - (2025)',
                        desc: 'vite-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                ]}
            />
            <ToolDesc
                title="Databases"
                tools={[
                    {
                        image: 'MySql.svg',
                        name: 'MySQL - (2023)',
                        desc: 'mysql-desc',
                        projects: ['school-js', 'school-cs'],
                    },
                    {
                        image: 'MongoDB.png',
                        name: 'MongoDB - (2025)',
                        desc: 'mongodb-desc',
                        projects: ['agent-q'],
                    },
                ]}
            />
            <ToolDesc
                title="Version Control & Tools"
                tools={[
                    {
                        image: 'Git.png',
                        name: 'Git & GitHub - (2021)',
                        desc: 'git-github-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                    {
                        image: 'VSCode.png',
                        name: 'Visual Studio Code - (2019)',
                        desc: 'vscode-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q', 'school-js'],
                    },
                    {
                        image: 'Docker.webp',
                        name: 'Docker - (2025)',
                        desc: 'docker-desc',
                        projects: ['school-js'],
                    },
                ]}
            />
        </main>
    );
};

export default Techpage;

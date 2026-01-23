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
                    { image: 'Javascript.png', name: 'JavaScript (ES6+)', desc: 'javascript-desc' },
                    {
                        name: 'TypeScript',
                        image: 'Typescript.png',
                        desc: 'typescript-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                    { image: 'Csharp.png', name: 'C#', desc: 'csharp-desc' },
                    {
                        name: 'HTML',
                        image: 'HTML.png',
                        desc: 'html-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                    {
                        name: 'CSS',
                        image: 'CSS.png',
                        desc: 'css-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                ]}
            />
            <ToolDesc
                title="Game Engines"
                tools={[
                    { image: 'Unity.png', name: 'Unity', desc: 'unity-desc' },
                    { image: 'UE.png', name: 'Unreal Engine', desc: 'unreal-engine-desc' },
                    {
                        image: 'Phaser.png',
                        name: 'Phaser',
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
                        name: 'React',
                        desc: 'react-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                    {
                        image: 'Node.png',
                        name: 'Node.js',
                        desc: 'node-js-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                    {
                        image: 'Express.webp',
                        name: 'Express.js',
                        desc: 'express-js-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                    {
                        image: 'Vite.png',
                        name: 'Vite',
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
                        name: 'MySQL',
                        desc: 'mysql-desc',
                    },
                    {
                        image: 'MongoDB.png',
                        name: 'MongoDB',
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
                        name: 'Git & GitHub',
                        desc: 'git-github-desc',
                        projects: ['portfolio', 'realm', 'deal-gone-dark', 'agent-q'],
                    },
                    { image: 'VSCode.png', name: 'Visual Studio Code', desc: 'vscode-desc' },
                    { image: 'Docker.webp', name: 'Docker', desc: 'docker-desc' },
                ]}
            />
        </main>
    );
};

export default Techpage;

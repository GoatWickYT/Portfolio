import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projectpage.css';
import { useLocation } from 'react-router-dom';

type Project = {
    title: string;
    image: string;
};

const Projectpage: React.FC = () => {
    const location = useLocation();
    const openUp = location.state?.openUp as string | undefined;
    const [selectedProject, setSelectedProject] = useState<Project | null>({
        title: openUp || 'exam',
        image: '',
    });
    const [selectedImage, setSelectedImage] = useState<number>(1);
    const setSelectedCard = (project: Project) => {
        setSelectedProject(project);
    };

    return (
        <main className="Projectpage">
            <section className="Spotlight">
                <div className="Image">
                    <img
                        src={`/${selectedProject?.title}/showcase${selectedImage}.png`}
                        alt={`${selectedProject?.title}`}
                    />
                </div>
                <ul className="ImageList">
                    <li>
                        <img
                            onClick={() => setSelectedImage(1)}
                            className={selectedImage === 1 ? 'selected' : ''}
                            src={`/${selectedProject?.title}/showcase1.png`}
                            alt={`${selectedProject?.title} showcase 1`}
                        />
                    </li>
                    <li>
                        <img
                            onClick={() => setSelectedImage(2)}
                            className={selectedImage === 2 ? 'selected' : ''}
                            src={`/${selectedProject?.title}/showcase2.png`}
                            alt={`${selectedProject?.title} showcase 2`}
                        />
                    </li>
                    <li>
                        <img
                            onClick={() => setSelectedImage(3)}
                            className={selectedImage === 3 ? 'selected' : ''}
                            src={`/${selectedProject?.title}/showcase3.png`}
                            alt={`${selectedProject?.title} showcase 3`}
                        />
                    </li>
                    <li>
                        <img
                            onClick={() => setSelectedImage(4)}
                            className={selectedImage === 4 ? 'selected' : ''}
                            src={`/${selectedProject?.title}/showcase4.png`}
                            alt={`${selectedProject?.title} showcase 4`}
                        />
                    </li>
                    <li>
                        <img
                            onClick={() => setSelectedImage(5)}
                            className={selectedImage === 5 ? 'selected' : ''}
                            src={`/${selectedProject?.title}/showcase5.png`}
                            alt={`${selectedProject?.title} showcase 5`}
                        />
                    </li>
                </ul>
            </section>
            <section className="List">
                <ProjectCard
                    active={selectedProject?.title === 'exam'}
                    title="exam"
                    image="/vasvari.svg"
                    selected={() => setSelectedCard({ title: 'exam', image: '/vasvari.svg' })}
                />
                <ProjectCard
                    active={selectedProject?.title === 'realm'}
                    title="realm"
                    image="/REALM.png"
                    selected={() => setSelectedCard({ title: 'realm', image: '/REALM.png' })}
                />
                <ProjectCard
                    active={selectedProject?.title === 'agentq'}
                    title="agentq"
                    image="/AgentQ.svg"
                    selected={() => setSelectedCard({ title: 'agentq', image: '/AgentQ.svg' })}
                />
                <ProjectCard
                    active={selectedProject?.title === 'dgd'}
                    title="dgd"
                    image="/DGD.png"
                    selected={() => setSelectedCard({ title: 'dgd', image: '/DGD.png' })}
                />
                <ProjectCard
                    active={selectedProject?.title === 'school-js'}
                    title="school-js"
                    image="/Javascript.png"
                    selected={() =>
                        setSelectedCard({ title: 'school-js', image: '/Javascript.png' })
                    }
                />
                <ProjectCard
                    active={selectedProject?.title === 'school-cs'}
                    title="school-cs"
                    image="/Csharp.png"
                    selected={() => setSelectedCard({ title: 'school-cs', image: '/Csharp.png' })}
                />
            </section>
        </main>
    );
};

export default Projectpage;

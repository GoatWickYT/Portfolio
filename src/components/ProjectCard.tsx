import { useTranslation } from 'react-i18next';
import './ProjectCard.css';

type ProjectCardProps = {
    active?: boolean;
    title: string;
    image: string;
    selected: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const { active, title, image, selected } = props;
    const { t } = useTranslation();

    return (
        <main className={`ProjectCard ${active ? 'active' : ''}`} onClick={selected}>
            <div className="Card">
                <img src={image} alt={title} />
                <h3>{t(`page-project-card-${title}`)}</h3>
                <p>{t(`page-project-card-description-${title}`)}</p>
            </div>
        </main>
    );
};

export default ProjectCard;

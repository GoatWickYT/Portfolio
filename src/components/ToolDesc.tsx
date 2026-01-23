import { useTranslation } from 'react-i18next';
import './ToolDesc.css';

type ToolDescProps = {
    title: string;
    tools: {
        image: string;
        name: string;
        desc: string;
        projects?: string[];
    }[];
};

const ToolDesc: React.FC<ToolDescProps> = (props) => {
    const { title, tools } = props;
    const { t } = useTranslation();

    return (
        <section className="ToolDesc">
            <h3 className="ToolCategory">
                {t(`page-tech-${title.toLowerCase().replace(/\s+/g, '-')}`)}
            </h3>
            <ul className="ToolList">
                {tools.map((tool) => (
                    <li key={tool.name} className="ToolItem">
                        <img src={`/${tool.image}`} alt="" />
                        <div>
                            <span className="ToolName">{tool.name}</span>
                            {t(`page-tech-${tool.desc}`)}
                        </div>
                        <div>
                            {tool.projects && tool.projects.length > 0 && (
                                <>
                                    {tool.projects.map((proj, index) => (
                                        <span key={proj}>
                                            {t(`page-tech-project-${proj}`)}
                                            {index < tool.projects!.length - 1 ? ', ' : ''}
                                            <br />
                                        </span>
                                    ))}
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ToolDesc;

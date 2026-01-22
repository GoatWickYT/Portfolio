import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import './Mainpage.css';
import ProjectSection from '../components/ProjectSection';
import TechSection from '../components/TechSection';

const Mainpage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/') {
            navigate('/', { replace: true });
        }
    }, [location.pathname, navigate]);

    return (
        <main className="Mainpage">
            <HeroSection />
            <ProjectSection />
            <TechSection />
        </main>
    );
};

export default Mainpage;

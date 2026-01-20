import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import './Mainpage.css';

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
            <section className="Project"></section>
            <section className="Skill"></section>
        </main>
    );
};

export default Mainpage;

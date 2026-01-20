import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from '../pages/Mainpage';
import Footer from '../components/Footer';
import Projectpage from '../pages/Projectpage';
import Skillpage from '../pages/Skillpage';
import Aboutpage from '../pages/Aboutpage';
import { ThemeProvider } from '../theme/ThemeContext';
import LanguageSwitch from '../components/LanguageSwitch';
import ThemeSwitch from '../components/ThemeSwitch';

const SiteRouter: React.FC = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Mainpage />} />
                    <Route path="/skills" element={<Skillpage />} />
                    <Route path="/projects" element={<Projectpage />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="*" element={<Mainpage />} />
                </Routes>
                <Footer />
                <LanguageSwitch />
                <ThemeSwitch />
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default SiteRouter;

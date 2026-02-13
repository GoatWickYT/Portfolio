import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from '../pages/Mainpage';
import Footer from '../components/Footer';
import Projectpage from '../pages/Projectpage';
import Techpage from '../pages/Techpage';
import Aboutpage from '../pages/Aboutpage';
import { ThemeProvider } from '../theme/ThemeContext';
import LanguageSwitch from '../components/LanguageSwitch';
import ThemeSwitch from '../components/ThemeSwitch';

const SiteRouter: React.FC = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Mainpage />} />
                        <Route path="/techs" element={<Techpage />} />
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

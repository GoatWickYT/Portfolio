import TimeDropdown from '../components/TimeDropdown';
import './Aboutpage.css';

const Aboutpage: React.FC = () => {
    const years: Array<number> = [26, 25, 24, 23, 22, 21, 20, 19, 18];
    return (
        <main className="Aboutpage">
            {years.map((year) => (
                <TimeDropdown year={2000 + year} />
            ))}
        </main>
    );
};

export default Aboutpage;

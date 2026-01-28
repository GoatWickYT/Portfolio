import { useState } from 'react';
import './TimeDropdown.css';
import { useTranslation } from 'react-i18next';

type TimeDropdownProps = {
    year: number;
};

const TimeDropdown: React.FC<TimeDropdownProps> = (props) => {
    const { year } = props;
    const { t } = useTranslation();
    const [opened, setOpened] = useState<boolean>(false);

    const toggleOpened = () => setOpened((prev) => !prev);

    return (
        <main className="TimeDropdown">
            <div className="Card">
                <div className={`Title ${opened ? 'Opened' : ''}`} onClick={toggleOpened}>
                    {year} - {t(`time-dropdown-${year}`)} {opened ? '🞁' : '🞃'}
                </div>
                <div className={`Content ${opened ? 'Opened' : ''}`}>
                    <div>{t(`time-dropdown-content-${year}`)}</div>
                </div>
            </div>
        </main>
    );
};

export default TimeDropdown;

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
                    {year} - {t(`time-dropdown-${year}`)}{' '}
                    <svg
                        className={`Arrow ${opened ? 'Opened' : ''}`}
                        viewBox="0 0 24 24"
                        width="60"
                        height="60"
                    >
                        <path
                            d="M7 10l5 5 5-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className={`Content ${opened ? 'Opened' : ''}`}>
                    <div>{t(`time-dropdown-content-${year}`)}</div>
                </div>
            </div>
        </main>
    );
};

export default TimeDropdown;

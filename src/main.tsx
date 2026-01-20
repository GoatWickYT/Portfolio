import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import SiteRouter from './router/SiteRouter';
import './utils/i18n';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SiteRouter />
    </StrictMode>,
);

import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import Resume from './components/Resume';
import './styles.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element to mount to');
const page = window.location.pathname === '/resume.html' ? <Resume /> : <App />;
const app = <React.StrictMode>{page}</React.StrictMode>;
if (rootElement.hasChildNodes()) hydrateRoot(rootElement, app);
else createRoot(rootElement).render(app);

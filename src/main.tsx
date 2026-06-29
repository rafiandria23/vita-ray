import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@/context/ThemeContext';
import { UnitProvider } from '@/context/UnitContext';
import App from '@/App';
import '@/styles/main.scss';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider>
      <UnitProvider>
        <App />
      </UnitProvider>
    </ThemeProvider>
  </React.StrictMode>
);
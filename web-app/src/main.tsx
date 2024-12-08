import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from '@material-tailwind/react';

import App from './App.tsx';
import '../public/css/index.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { GlobalContextProvider } from '@/context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </StrictMode>
);

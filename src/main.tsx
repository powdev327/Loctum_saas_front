import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as TemplateProvider } from 'styled-components';
import App from './App';
import TemplateStyles from './assets/styles/TemplateStyles';
import 'venobox/dist/venobox.min.css';
import 'swiper/swiper-bundle.css';
import 'simplebar-react/dist/simplebar.min.css';
import './assets/styles/common-style.css';
import './assets/styles/buttons-style.css';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { AppWrapper } from './Components/common/PageMeta';
import DynamicCssLoader from './helpers/DynamicCssLoader.tsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Toaster
            position="top-center"
            reverseOrder={false}
            containerStyle={{ zIndex: 999999 }}
            toastOptions={{
                duration: 5000,
                style: {
                    zIndex: 999999,
                    background: '#333',
                    color: '#fff',
                    padding: '10px 20px',
                    fontSize: '16px',
                },
            }}
        />
        <TemplateProvider theme={TemplateStyles}>
                <DynamicCssLoader>
                    <ThemeProvider>
                           <AppWrapper>
                               <App />
                           </AppWrapper>
                    </ThemeProvider>
                </DynamicCssLoader>
        </TemplateProvider>
    </BrowserRouter>
);
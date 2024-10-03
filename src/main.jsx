import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import translation_en from "./translations/en/translation.json";
import translation_ar from "./translations/ar/translation.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "ar",
  resources: {
    ar: {
      translation: translation_ar
    },
    en: {
      translation: translation_en
    }
  }
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next} >
      <App />
    </I18nextProvider>
  </StrictMode>,
);

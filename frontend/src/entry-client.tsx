import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import { initI18n } from './services/i18n';

initI18n().then(() => {
  ReactDOM.hydrateRoot(
    document.getElementById('app') as HTMLElement,
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  )
});
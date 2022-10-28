import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {CountriesProvider} from './context/CountriesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <CountriesProvider>
            <App />
        </CountriesProvider>
    </HashRouter>
);



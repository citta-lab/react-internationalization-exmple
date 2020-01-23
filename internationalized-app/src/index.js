import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import {en,fr,es} from 'translation-lib/card'; // using from the lib.


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var locale = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || 'en-US';
const msg = {
    'en-US': en,
    'fr-FR': fr,
    'es-ES': es
};

// locale = 'es-ES'; [ if you want to test for diff lang by focrcing locale ] 

ReactDOM.render(
    <IntlProvider locale={locale} messages={msg[locale]}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import {en,fr,es} from './translations'


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <IntlProvider locale="en" messages={en}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

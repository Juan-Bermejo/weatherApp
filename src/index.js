import React from 'react';
import { render } from 'react-dom';

import ApiData from './ApiRequest';
import App from './App';

render(
    <React.StrictMode>

        <ApiData/>

    </React.StrictMode>,
    document.getElementById('root')
);
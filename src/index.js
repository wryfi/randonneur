import React from 'react';
import { render } from 'react-dom';
import { Container } from '@cerebral/react';

import App from './components/App';
import controller from './controller';
import Navigation from './components/Navigation';

render(
    <Container controller={controller}>
        <App />
    </Container>,
    document.getElementById('root')
);

render(
    <Container controller={controller}>
        <Navigation />
    </Container>,
    document.getElementById('nav')
);

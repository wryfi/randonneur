import { Controller } from 'cerebral';
import Devtools from 'cerebral/devtools';

import app from './app/index';

let devtools = null;

// TODO: add logic to check for an environment variable
let IS_DEVELOPING = true;

if (IS_DEVELOPING) {
    devtools = Devtools({
        host: '127.0.0.1:8585',
        reconnect: true
    })
}

export default Controller(app, {
    devtools: devtools
});

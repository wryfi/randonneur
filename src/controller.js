import { Controller } from 'cerebral';
import Devtools from 'cerebral/devtools';

import app from './app/index';

export default Controller(app, {
    devtools:
        process.env.NODE_ENV === 'production'
            ? null
            : Devtools({
                host: '127.0.0.1:8585',
                reconnect: true,
                storeMutations: true,
                bigComponentsWarning: 5,
                warnStateProps: true
            })
});

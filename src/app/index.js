import { Module } from 'cerebral';
import { set } from 'cerebral/operators';
import { state } from 'cerebral/tags';
import router from './router';

export default Module({
    state: {
        name: 'randonneur',
        message: 'Welcome to randonneur!',
        current_page: 'home'
    },
    signals: {
        hardware_cabinets_routed: set(state`current_page`, 'hardware_cabinets'),
        home_routed: set(state`current_page`, `home`)
    },
    modules: { router }
});

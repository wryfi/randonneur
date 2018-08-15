import HttpProvider from '@cerebral/http';
import { Module } from 'cerebral';
import router from './router';
import hardware from './modules/hardware';
import { getMountaineerCabinets } from "./modules/hardware/cabinets/actions";
import { setCurrentPage } from './factories';

const http = HttpProvider({
    // TODO: configurable URL
    baseUrl: 'http://localhost:8000/api/v1',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json'
    },
    timeout: 5000
});

export default Module({
    state: {
        name: 'randonneur',
        message: 'Welcome to randonneur!',
        current_page: 'home'
    },
    signals: {
        hardware_cabinets_routed: [setCurrentPage('hardware_cabinets'), getMountaineerCabinets],
        home_routed: setCurrentPage('home'),
    },
    modules: { hardware, router },
    providers: { http: http }
});

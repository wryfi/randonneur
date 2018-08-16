import React from 'react';
import {connect} from "@cerebral/react";
import {state} from "cerebral/tags";
import {Container, Header, Icon} from 'semantic-ui-react';
import Navigation from '../Navigation';
import {CabinetList} from "./list";
import { CabinetDetail } from './detail';

export const Cabinets = connect(
    {
        name: state`name`,
        cabinets: state`hardware.cabinets`
    },
     function Cabinets({ cabinets, name }) {
        let containerClass = ['main', name].join(' ');
        return (
            <Container className={containerClass}>
                <Navigation />
                <Header as='h1'>
                    <Icon name='server' />
                    Cabinets
                </Header>
                <CabinetList cabinets={cabinets} />
            </Container>
        );
    }
);

export const Cabinet = connect(
    {
        cabinet: state`hardware.cabinet`,
        name: state`name`
    },
    ({ cabinet, name }) => {
        let containerClass = ['main', name].join(' ');
        return(
            <Container className={containerClass}>
                <Navigation />
                <CabinetDetail cabinet={cabinet} />
            </Container>
        );
    }
);

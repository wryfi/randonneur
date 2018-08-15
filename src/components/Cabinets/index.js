import React from 'react';
import {connect} from "@cerebral/react";
import {state} from "cerebral/tags";
import {Container, Header, Icon} from 'semantic-ui-react';
import Navigation from '../Navigation';
import {CabinetList} from "./list";

export default connect(
    {
        cabinets: state`hardware.cabinets`
    },
    function Cabinets({ cabinets }) {
        return (
            <Container style={{ paddingTop: '1em' }}>
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
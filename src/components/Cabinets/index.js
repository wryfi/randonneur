import React from 'react';
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import { Container, Header, Icon } from 'semantic-ui-react';
import Navigation from '../Navigation';

export default connect(
    {
        name: state`name`,
    },
    function Cabinets() {
        return (
            <Container style={{ paddingTop: '1em' }}>
                <Navigation />
                <Header as='h1'>
                    <Icon name='server' />
                    Cabinets
                </Header>
            </Container>
        );
    }
);
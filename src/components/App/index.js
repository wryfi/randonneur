import React from 'react';
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import { Container } from 'semantic-ui-react';
import Navigation from '../Navigation';
import Cabinets from '../Cabinets'
import Home from '../Home'

const pages = {
    home: Home,
    hardware_cabinets: Cabinets
};

export default connect(
    {
        name: state`name`,
        current_page: state`current_page`
    },
    function App({ name, current_page }) {
        try {
            const Page = pages[current_page];
            return(
                <Page />
            )
        } catch(err) {
            return (
                <Container style={{ paddingTop: '1em' }}>
                    <Navigation />
                </Container>
            )
        }
    }
);

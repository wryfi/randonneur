import React from 'react';
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";
import { Container, Grid, GridColumn, Header, Icon, Segment } from 'semantic-ui-react';
import Navigation from '../Navigation';

export default connect(
    {
        name: state`name`,
        message: state`message`,
        say_hello: signal`say_hello`,
        say_goodbye: signal`say_goodbye`
    },
    function App({ name, message, say_hello, say_goodbye }) {
        return (
            <Container style={{ paddingTop: '1em' }}>
                <Navigation />
                <Header as='h1'>
                    <Icon name='microchip' />
                    Hardware
                </Header>
                <Segment stacked>
                    <Grid columns='3' divided stackable>
                        <GridColumn >
                            <Header as='h3'>
                                <Icon name='server' />
                                <Header.Content>Cabinets</Header.Content>
                            </Header>
                        </GridColumn>
                        <GridColumn>
                            <Header as='h3'>
                                <Icon name='building' />
                                <Header.Content>Datacenters</Header.Content>
                            </Header>
                        </GridColumn>
                        <GridColumn>
                            <Header as='h3'>
                                <Icon name='wifi' />
                                <Header.Content>Network Devices</Header.Content>
                            </Header>
                        </GridColumn>
                        <GridColumn>
                            <Header as='h3'>
                                <Icon name='power cord' />
                                <Header.Content>Power Distribution Units</Header.Content>
                            </Header>
                        </GridColumn>
                        <GridColumn>
                            <Header as='h3'>
                                <Icon name='desktop' />
                                <Header.Content>Servers</Header.Content>
                            </Header>
                        </GridColumn>

                    </Grid>
                </Segment>
                <Header as='h1'>
                    <Icon name='sitemap' />
                    Hosts
                </Header>
                <Segment stacked>
                </Segment>

            </Container>
        );
    }
);

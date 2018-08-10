import React from 'react';
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";
import { Button, Container, Grid, GridColumn, Header, Icon, Segment } from 'semantic-ui-react';

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
                <Header as='h1' block>
                    <Icon name='server' />
                    <Header.Content>{message}</Header.Content>
                </Header>
                <p>Randonneur is a frontend for the mountaineer inventory management system.</p>
                <Segment.Group stacked>
                    <Segment>
                        <Header as='h2'>Hardware</Header>
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
                    <Segment>
                        <Header as='h2'>Hosts</Header>
                    </Segment>
                </Segment.Group>
                <div>
                    <Button primary onClick={() => say_hello()}>hello</Button>
                    <Button secondary onClick={() => say_goodbye()}>goodbye</Button>
                </div>
            </Container>
        );
    }
);

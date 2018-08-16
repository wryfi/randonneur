import React from 'react';
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import { Container, Grid, GridColumn, Header, Icon, Item, Segment } from 'semantic-ui-react';
import Navigation from '../Navigation';

export default connect(
    {
        name: state`name`,
    },
    function App({ name }) {
        let cssClass = ['main', name].join(' ');
        return (
            <Container className={cssClass}>
                <Navigation />
                <Header as='h1'>
                    <Icon name='microchip' />
                    Hardware
                </Header>
                <Segment stacked className='item-navigation'>
                    <Grid columns='3' divided stackable>
                        <GridColumn >
                            <Item href='/hardware/cabinets'>
                                <Item.Content>
                                    <Item.Header as='h2'><Icon name='server' /> Cabinets</Item.Header>
                                </Item.Content>
                            </Item>
                        </GridColumn>
                        <GridColumn>
                            <Item href='/hardware/datacenters'>
                                <Item.Content>
                                    <Item.Header as='h2'><Icon name='building' /> Datacenters</Item.Header>
                                </Item.Content>
                            </Item>
                        </GridColumn>
                        <GridColumn>
                            <Item href='/hardware/network-devices'>
                                <Item.Content>
                                    <Item.Header as='h2'><Icon name='wifi' /> Network Devices</Item.Header>
                                </Item.Content>
                            </Item>
                        </GridColumn>
                        <GridColumn>
                            <Item href='/hardware/power-distribution-units'>
                                <Item.Content>
                                    <Item.Header as='h2'><Icon name='power cord' /> Power Distribution</Item.Header>
                                </Item.Content>
                            </Item>
                        </GridColumn>
                        <GridColumn>
                            <Item href='/hardware/servers'>
                                <Item.Content>
                                    <Item.Header as='h2'><Icon name='desktop' /> Servers</Item.Header>
                                </Item.Content>
                            </Item>
                        </GridColumn>
                    </Grid>
                </Segment>
                <Header as='h1'>
                    <Icon name='sitemap' />
                    Hosts
                </Header>

            </Container>
        );
    }
);

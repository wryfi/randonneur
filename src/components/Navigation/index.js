import React from 'react';
import { connect } from "@cerebral/react";
import { state } from "cerebral/tags";
import { Container, Image, Menu, Dropdown } from 'semantic-ui-react';

export default connect(
    {
        name: state`name`,
    },
    function Navigate({ name }) {
        return (
                <Menu stackable inverted>
                    <Container>
                        <Menu.Item as='a' header href='/'>
                            <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                            {name}
                        </Menu.Item>

                        <Dropdown item simple text='Hardware'>
                            <Dropdown.Menu>
                                <Dropdown.Item as='a' href='/hardware/cabinets'>Cabinets</Dropdown.Item>
                                <Dropdown.Item as='a' href='/hardware/datacenters'>Datacenters</Dropdown.Item>
                                <Dropdown.Item as='a' href='/hardware/nework-devices'>Network Devices</Dropdown.Item>
                                <Dropdown.Item as='a' href='/hardware/power-distribution-units'>Power Distribution Units</Dropdown.Item>
                                <Dropdown.Item as='a' href='/hardware/servers'>Servers</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown item simple text='Hosts'>
                            <Dropdown.Menu>
                                <Dropdown.Item as='a' href='/hosts/'>Hosts</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>
                </Menu>
        );
    }
);
import React from 'react';
import { Card, Grid, Header, Icon } from 'semantic-ui-react';
import Loading from '../Loading';

function CabinetInfo(props) {
    const cabinet = props.cabinet;
    let details = [];
    for (var key in cabinet) {
        let value = cabinet[key];
        let valueKey = null;
        if (value) {
            if (typeof(value) === 'object') {
                let dc_id = value['slug'];
                valueKey = value['slug'];
                let url = '/hardware/datacenters/' + dc_id;
                value = <a href={url}>{value['name']}</a>
            } else {
                valueKey = key + '_' + value;
            }
            if (key !== 'url' && key !== 'slug' && key !== 'name') {
                details.push(
                    <Grid.Column width={7} key={key}>
                        {key}
                    </Grid.Column>
                );
                details.push(
                    <Grid.Column width={9} key={valueKey}>
                        {value}
                    </Grid.Column>
                );
            }
        }
    }
    return details
}

export function CabinetDetail(props) {
    const cabinet = props.cabinet;
    if (cabinet) {
        return(
            <div>
                <Header as='h1'>
                    <Icon name='server' />
                    {cabinet['name']}
                </Header>
                <Card.Group>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header as='h1'>Cabinet Details</Card.Header>
                        </Card.Content>
                        <Card.Content>
                            <Card.Description>
                                <Grid columns={16}>
                                    <CabinetInfo cabinet={cabinet} />
                                </Grid>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
            )
    } else {
        return(
            <Loading />
        )
    }

}
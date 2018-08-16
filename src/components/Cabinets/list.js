import React from 'react';
import { Card, List } from 'semantic-ui-react';
import Loading from "../Loading";

function CabinetSummary(props) {
    const cabinet = props.cabinet;
    const detailUrl = '/hardware/cabinets/' + cabinet['slug'];
    return(
        <Card href={detailUrl}>
            <Card.Content>
                <Card.Header content={cabinet['name']} />
                <Card.Meta>{cabinet['datacenter']['name']}</Card.Meta>
                <Card.Description>
                    <List>
                        <List.Item>
                            {cabinet['rack_units']} Rack Units
                        </List.Item>
                        <List.Item>
                            {cabinet['posts']} Posts
                        </List.Item>
                        <List.Item>
                            {cabinet['power']} Watts
                        </List.Item>
                    </List>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

function CabinetList(props) {
    const cabinets = props.cabinets;
    if (cabinets.length > 0) {
        const summaries = cabinets.map((cabinet) => <CabinetSummary cabinet={cabinet} key={cabinet['slug']} />);
        return(
            <Card.Group>
                {summaries}
            </Card.Group>
        )
    } else {
        return(
            <Loading />
        )
    }
}

export { CabinetList };
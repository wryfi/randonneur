import React from 'react';
import { Card, List } from 'semantic-ui-react';

function CabinetSummary(props) {
    const cabinet = props.cabinet;
    return(
        <Card href='/hardware/cabinets'>
            <Card.Content>
                <Card.Header content={cabinet['name']} />
                <Card.Meta content={cabinet['slug']} />
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
        return <p />
    }
}

export { CabinetList };
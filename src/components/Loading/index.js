import {Icon, Message} from "semantic-ui-react";
import React from "react";

export default function Loading() {
    return(
        <Message icon>
            <Icon name='circle notched' loading />
            <Message.Content>
                <Message.Header>Give it a second</Message.Header>
                Fetching data ...
            </Message.Content>
        </Message>
    )
}
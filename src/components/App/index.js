import React from 'react';
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";
import { Button } from 'semantic-ui-react';

export default connect(
    {
        name: state`name`,
        message: state`message`,
        say_hello: signal`say_hello`,
        say_goodbye: signal`say_goodbye`
    },
    function App({ name, message, say_hello, say_goodbye }) {
        return (
            <div>
                <span>{message}</span>
                <div>
                    <Button primary onClick={() => say_hello()}>hello</Button>
                    <Button secondary onClick={() => say_goodbye()}>goodbye</Button>
                </div>
            </div>
        );
    }
);

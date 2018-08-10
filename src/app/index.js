import { Module } from 'cerebral';
import * as sequences from "./sequences";

export default Module({
    state: {
        name: 'randonneur',
        message: 'Welcome to randonneur!'
    },
    signals: {
        say_hello: sequences.say_hello,
        say_goodbye: sequences.say_goodbye
    }
});

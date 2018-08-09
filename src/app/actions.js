export function say_hello({ state }) {
    let message = 'Hello, ' + state.get('name') + '.';
    state.set('message', message);
}

export function say_goodbye({ state }) {
    let message = 'Goodbye, ' + state.get('name') + '.';
    state.set('message', message);
}
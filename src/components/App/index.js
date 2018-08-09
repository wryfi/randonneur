import { connect } from "@cerebral/inferno";
import { state, signal } from "cerebral/tags";

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
                <button onClick={() => say_hello()}>hello</button>
                <button onClick={() => say_goodbye()}>goodbye</button>
                </div>
            </div>
        );
    }
);

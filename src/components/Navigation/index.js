import { connect } from "@cerebral/inferno";
import { state } from "cerebral/tags";
import { Nav, NavItem, NavLink } from 'inferno-bootstrap';

export default connect(
    {
        name: state`name`,
    },
    function Navigate({ name }) {
        return (
            <Nav>
                <NavItem>
                    <NavLink href="#">{name}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Hardware</NavLink>
                </NavItem>
            </Nav>
        );
    }
);
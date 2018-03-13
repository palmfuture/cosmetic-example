import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class NavbarComponent extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="warning" dark light expand="md">
                    <NavbarBrand style={{color: 'white', cursor: 'pointer'}} onClick={() => { this.props.history.push('/') }}>
                        Cosmetic
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem onClick={() => { this.props.history.push('/login') }}>
                                <NavLink style={{color: 'white', cursor: 'pointer'}} href='#'>Component</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{color: 'white', cursor: 'pointer'}} href='#'>Github</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret style={{color: 'white', cursor: 'pointer'}}>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        Option 1
                                </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
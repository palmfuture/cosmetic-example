import React, { Component } from 'react';

import Navbar from '../component/Navbar';

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <Navbar {...this.props}/>
                <br/><br/><br/>
                <h1>Login</h1>
            </div>
        )
    }
}

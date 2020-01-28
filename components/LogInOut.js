import React, { Component } from 'react'
import {Nav} from 'react-bootstrap';
import auth0 from '../services/auth0';

export default class LogInOut extends Component {
    constructor(){
        super();
        this.state = {
            isAuthenticated: false
        }
    }
    login = () => {
        auth0.login();
        this.setState({isAuthenticated: true})
    }
    logout = () => {
        auth0.logout();
        this.setState({isAuthenticated: false})
    }
    render() {
        return (
            <div>
                {!this.isAuthenticated ? <Nav.Link className="text-light clickable" onClick={this.login}>Login</Nav.Link>
                : <Nav.Link className="text-light clickable" onClick={this.logout}>Logout</Nav.Link>}
                {console.log("beni renderle ağam")}
            </div>
        )
    }
}

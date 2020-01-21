import React, { Component } from 'react'
import auth0Client from '../services/auth0';
import {withRouter} from 'next/router';
class Callback extends Component {
    async componentDidMount(){
        await auth0Client.handleAuthentication();
        this.props.router.push('/');
    }
    render() {
        return (
            <div>
                <h3>Verifying login data ...</h3>
            </div>
        )
    }
}

export default withRouter(Callback);
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import auth0Client from '../services/auth0';
import {withRouter} from 'next/router';
class Callback extends Component {

    // handleSubmit = (event) =>{
    //     event.preventDefault()
    //     const user_id = this.props.db_profile[0].uid
    //     const username = this.props.db_profile[0].username
    //     const data = {title: event.target.title.value,
    //     body: event.target.body.value,
    //     username: username,
    //     uid: user_id}
    //     console.log("Ahmet");
    //     post('/api/post/posttodb', data).then(response => console.log(response))

    // }
    async componentDidMount(){
        await auth0Client.handleAuthentication();
        this.props.router.push('/');
    }
    render() {

        return (
            <div>
                Add Post
                <form >
                    <TextField
                        id='title'
                        label="Title"
                        margin='normal'/>
                        <br/>
                    <TextField
                        id='bodt'
                        label="Body"
                        multiline
                        rows='4'
                        margin='normal'/>
                        <br/>
                    <button type='submit'> Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        db_profile: state.auth.reducer.db_profile
    }
}
export default withRouter{Callback};
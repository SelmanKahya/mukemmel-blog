import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
class AddNewPost extends Component {

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

export default AddNewPost;
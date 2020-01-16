import React, { Component } from 'react'

class addNewPost extends Component {
    constructor() {
        super();
        this.state = {
            titlex: "",
            context: "",
        };
    }

    myChangeHandler = (event) => {
        this.setState(
            {
                titlex: event.target.name,
                context: event.target.value
            }
        );
        console.log(titlex);
        console.log(context);
    }
    render() {

        return (
            <div>
                Add Post
            <form>
                    <input type="text" name='username' placeholder="Title here" /><br />
                    <input type="text" name='username' placeholder="context here" /><br />
                    <input type="submit" value="Submit" event={this.myChangeHandler}/>
                </form>
            </div>
        )
    }
}

export default addNewPost;
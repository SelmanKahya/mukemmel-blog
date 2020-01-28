import React, { Component } from 'react'
import AddNewPost from '../components/AddNewPost';

class AddPost extends Component {
    constructor(props){
        super(props);

        this.state = {
          fields: {},
          errors: {},
          isValid: true
        }
      }

      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(fields["name"] !== "a"){
          formIsValid = false;
          errors["name"] = "Wrong Username";
        }
        if(fields["password"] !== "a"){
            formIsValid = false;
            errors["password"] = "Wrong Password";
        }
        this.setState({errors: errors});
        return formIsValid;
      }

      contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
            this.setState({isValid: true});
        }else{
          alert("Form has errors.")
        }
      }

      handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
      }

      render(){
        const isValid = this.state.isValid
        return (
          <div>
              {isValid ? <AddNewPost/> : <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
              <div className="col-md-6">
                <fieldset>
                  <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                  <span className="error">{this.state.errors["name"]}</span>
                  <br/>
                  <input ref="password" type="text" size="30" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                  <span className="error">{this.state.errors["password"]}</span>
                  <br/>
                </fieldset>
              </div>
              <div className="col-md-12">
                <fieldset>
                  <button className="btn btn-lg pro" id="submit" value="Submit">Login</button>
                </fieldset>
              </div>
            </form>}

            <style jsx>{`
              .contactform{
                  margin: 20px;
                }

                input{
                  margin-bottom: 5px;
                  height: 20px;
                  border: 1px solid #d8d8d8;
                  padding: 3px;
                }

                textarea{
                  border: 1px solid #d8d8d8;
                  padding: 3px;
                }

                button{
                  padding: 10px;
                  border: 1px solid #d8d8d8;
                  background-color: #f9f9f9;
                  border-radius: 3px;
                }

                .error{
                  margin-left: 5px;
                  font-size: 13px;
                  color: red;
                }
            `}</style>
          </div>
        )
      }
}
export default AddPost;

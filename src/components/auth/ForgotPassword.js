import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

export default class ForgotPassword extends Component {
    state={
        email:''
    }
    handleChange=(e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        Auth.forgotPassword(this.state.email)
        .then(()=>this.props.history.push("/forgotpasswordverification"))
        .catch((er)=> console.log(er))
    }
    render() {
        return (
            <div className="container section">
                <div className="formholder section">
                        <form onSubmit={this.handleSubmit} className="white" id="form">
                            <h3 className="grey-text text-darken-3">Forgot Password!</h3>
                            <p>Enter the registered email ID to retrieve the account</p>
                            <div className="input-field">
                                <label htmlFor="email" placeholder="abc@xyz.com">Email</label>
                                <input className="validate" id="email" type="email" onChange={this.handleChange}></input>
                            </div>
                            <div className="input-field">
                                <button className="btn blue darken-3 z-depth-0">Submit</button>
                            </div>
                            
                        </form>
                    </div>
            </div>
        )
    }
}

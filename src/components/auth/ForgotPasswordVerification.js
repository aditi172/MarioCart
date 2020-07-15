import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

export default class ForgotPasswordVerification extends Component {
    state={
        verificationCode:'',
        email:'',
        newPassword:''
    }
    handleChange=(e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        Auth.forgotPasswordSubmit(
            this.state.email,
            this.state.verificationCode,
            this.state.newPassword
        ).then(()=> this.props.history.push("/changepasswordconfirmation"))
    }
    render() {
        return (
            <div className="container section">
                <div className="formholder section">
                        <form onSubmit={this.handleSubmit} className="white" id="form">
                            <h3 className="grey-text text-darken-3">Forgot Password Verification</h3>
                            <p>Enter the verification Code and details to confirm new Password</p>
                            <div className="input-field">
                                <label htmlFor="email" placeholder="abc@xyz.com">Email</label>
                                <input className="validate" id="email" type="email" onChange={this.handleChange}></input>
                            </div>

                            <div className="input-field">
                                <label htmlFor="verificationCode">Verification Code</label>
                                <input id="verificationCode" type="text" onChange={this.handleChange}></input>
                            </div>

                            <div className="input-field">
                                <label htmlFor="newPassword">New Password</label>
                                <input id="newPassword" type="password" onChange={this.handleChange}></input>
                            </div>

                            <div className="input-field">
                                <button className="btn blue darken-3 z-depth-0">Next</button>
                            </div>
                            
                        </form>
                    </div>
            </div>
        )
    }
}

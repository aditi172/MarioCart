import React, { Component } from 'react'; 
import { Auth } from 'aws-amplify';
import {Redirect} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import Signin from './Signin';
// import authReducers from '../../store/reducers/authReducers';

class Signup extends Component {

    state={
        email:'',
        password:'',
        firstname:'',
        lastname:'',
        username:'',
        confirmationCode:'',
        signedup: false,
        confirm: false
    }
    handleChange=(e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        
        const {confirm, signedup, email, password, firstname, lastname,username, confirmationCode}=this.state;
        if(!signedup) {
            Auth.signUp({
                firstname: firstname,
                lastname: lastname,
                password: password,
                username: email,
                attributes: {
                    email: email,
                }
            }).then(()=>console.log('Signed Up Successfully'))
            .catch((er)=>console.log(er));

            this.setState({
                signedup: true
            });
        }
        else {
            Auth.confirmSignUp(email, confirmationCode)
                .then(()=>
                    this.setState({
                        confirm: true
                    }),
                    console.log("confirm=true")
                ).catch((er)=> console.log(er));
        }
        
        // document.getElementById("form").reset();         
    }
    render() {
        const {signedup, confirm, firstname, lastname}=this.state;
        
        if(signedup) {
            if(!confirm) {
            return(
            <div className="container section">
                <div className="formholder section">
                    <form onSubmit={this.handleSubmit} className="white" id="form">
                        <h3 className="grey-text text-darken-3">CONFIRM SIGNUP</h3>
                        <p>Enter the registered ID along with the confirmation code sent to it here to verify...</p>
                        <div className="input-field">
                            <label htmlFor="email" placeholder="email">Email</label>
                            <input id="email" type="email" onChange={this.handleChange}></input>
                        </div>

                        <div className="input-field">
                            <label htmlFor="confirmationCode">Confirmation Code</label>
                            <input id="confirmationCode" type="text" onChange={this.handleChange}></input>
                        </div>

                        <div className="input-field">
                            <button className="btn blue darken-3 z-depth-0">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
            )
        }
        else {
            return(
            <Redirect to={{
                pathname: '/signin',
                newprops: {
                    firstname: firstname,
                    lastname: lastname
                }
            }}></Redirect>
            // <h3>Yei hoyega bas</h3>
            )
          }
        }
        else {
        return (
            <div className="container section">
                <div className="formholder section">
                        <form onSubmit={this.handleSubmit} className="white" id="form">
                            <h3 className="grey-text text-darken-3">SIGN UP</h3>
                            <div className="input-field">
                                <label htmlFor="firstname">FirstName</label>
                                <input id="firstname" type="text" onChange={this.handleChange}></input>
                            </div>

                            <div className="input-field">
                                <label htmlFor="lastname">Lastname</label>
                                <input id="lastname" type="text" onChange={this.handleChange}></input>
                            </div>

                            <div className="input-field">
                                <label htmlFor="email" placeholder="abc@xyz.com">Email</label>
                                <input className="validate" id="email" type="email" onChange={this.handleChange}></input>
                            </div>

                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input className="validate" id="password" type="password" onChange={this.handleChange}></input>
                            </div>

                            <div className="input-field">
                                <button className="btn blue darken-3 z-depth-0">Sign Up</button>
                            </div>
                            
                        </form>
                    </div>
            </div>
        )
        }
    }
}

export default Signup;

import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import {Link} from 'react-router-dom';
import {createUser} from '../../store/actions/userActions';
import { connect } from 'react-redux';


class Signin extends Component {
    state={
        email:'',
        password:''
    }
    handleChange=(e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        const {email, password}=this.state;
        Auth.signIn(email, password)
        .then((user)=>{ console.log(user)
            this.props.auth.setAuthStatus(true)
            this.props.auth.setUser(user)
            console.log(this.props)
            if(this.props.location.newprops) {
                this.props.createUser(this.props.location.newprops)
            }
            this.props.history.push("/")})
        .catch((er)=> console.log(er))
        // console.log(this.state);  
        // document.getElementById("form").reset();         
    }
    render() {
        return (
            <div className="container section">
                <div className="formholder section">
                        <form onSubmit={this.handleSubmit} className="white" id="form">
                            <h3 className="grey-text text-darken-3">SIGN IN</h3>
                            <div className="input-field">
                                <label htmlFor="email" placeholder="abc@xyz.com">Email</label>
                                <input className="validate" id="email" type="email" onChange={this.handleChange}></input>
                            </div>

                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input className="validate" id="password" type="password" onChange={this.handleChange}></input>
                            </div>
                            {/* <a href="/forgotpassword"><p>Forgot password?</p></a> */}
                            <Link to="/forgotpassword"><p>Forgot Password</p></Link>

                            <div className="input-field">
                                <button className="btn blue darken-3 z-depth-0">Login</button>
                            </div>
                            
                        </form>
                    </div>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=> {
    return({
        createUser: (user)=>dispatch(createUser(user))
    })
}
export default connect(null, mapDispatchToProps)(Signin)

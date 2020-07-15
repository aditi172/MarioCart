import React, { Component } from 'react';
import {BrowserRouter, Switch, Route,} from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import CreateProject from './components/projects/CreateProject';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

export default class App extends Component {

  state={
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }
  setAuthStatus=(a)=> {
    this.setState({
      isAuthenticated: a
    })
  }
  setUser=(user)=>{
    this.setState({
      user: user
    })
  }
  componentDidMount() {
    Auth.currentSession()
    .then(()=> this.setAuthStatus(true))
    Auth.currentAuthenticatedUser()
    .then((user)=>this.setUser(user))
    .catch((er)=> console.log(er))

    this.setState({
      isAuthenticating: false
    })
  }

  render() {
    const authProps={
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
  return (
    !this.state.isAuthenticating && 
    <BrowserRouter>
      <div className="App">
        <Navbar auth={authProps}></Navbar>
        <Switch>
          <Route exact path="/" render={(props)=> <Dashboard {...props} auth={authProps}/>}></Route>
          <Route path="/projects/:id" render={(props)=> <ProjectDetails {...props} auth={authProps}/>}></Route>
          <Route path="/signin" render={(props)=> <Signin {...props} auth={authProps}/>}></Route>
          <Route path="/signup" render={(props)=> <Signup {...props} auth={authProps}/>}></Route>
          <Route path="/create" render={(props)=> <CreateProject {...props} auth={authProps}/>}></Route>
          <Route path="/forgotpassword" render={(props)=> <ForgotPassword {...props} auth={authProps}/>}></Route>
          <Route path="/forgotpasswordverification" render={(props)=> <ForgotPasswordVerification {...props} auth={authProps}/>}></Route>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}


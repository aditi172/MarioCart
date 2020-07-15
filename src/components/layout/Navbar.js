import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { Auth } from 'aws-amplify';

// import Signedin from './Signedin';
// import Signedout from './Signedout';

const Navbar=(props)=> {
    const logout=(e)=> {
        e.preventDefault()
        Auth.signOut()
        .then(()=> {
            props.auth.setAuthStatus(false)
            props.auth.setUser(null)
        })
        .catch((er)=>console.log(er))
    }
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">MarioCart</Link>
                {props.auth.isAuthenticated && props.auth.user && (
                    // <div className="container">
                        <ul className="right">
                            <li><NavLink to="/create">New Project</NavLink></li>
                            <li><NavLink to="/signin" onClick={logout}>LogOut</NavLink></li>
                            {/* <li><NavLink to="/" className="btn btn-floating blue lighten-1">{props.auth.user.username.charAt(0)}</NavLink></li> */}
                        </ul>
                    // </div>
                // <Signedin auth={props}></Signedin>)}
                )}
                {!props.auth.isAuthenticated && (
                // <Signedout></Signedout>)}
                    <ul className="right">
                        <li><NavLink to="/signup">SignUp</NavLink></li>
                        <li><NavLink to="/signin">LogIn</NavLink></li>
                    </ul>
                )}
            </div>
        </nav>
    )
}
export default Navbar;



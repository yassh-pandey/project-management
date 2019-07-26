import React from 'react'
import {NavLink} from 'react-router-dom'
const SignedOutLinks = ()=>{
    return(
        <ul className="Navbar-item-list Signed-out-links">
            <NavLink to="/signup" className="Navbar-item">Sign Up</NavLink>
            <NavLink to="/signin" className="Navbar-item">Login</NavLink>
        </ul>
    )
}
export default SignedOutLinks
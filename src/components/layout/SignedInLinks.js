import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import firebaseConfig from '../../firebaseConfig';
const SignedInLinks = (props)=>{
    const logOut = ()=>{
        firebaseConfig.auth().signOut();
    };
    return(
        <ul className="Navbar-item-list Signed-in-links">
            <NavLink to="/createproject" className="Navbar-item">New Project</NavLink>
            <NavLink className="Navbar-item" to="/welcome" onClick={logOut}>Logout</NavLink>
            <NavLink to="/" className="Navbar-item Navbar-avatar">{props.initials}</NavLink>
        </ul>
    )
}
const mapStateToProps = (state, ownProps)=>{
    return{
        initials: state.auth.userDisplayName
    }
};
export default connect(mapStateToProps)(SignedInLinks)
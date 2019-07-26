import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../../styles/Navbar.css'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
const Navbar = (props)=>{
    return(
        <div className="Navbar-wrapper">
            <Link to="/" className="Navbar-logo">projectManagement</Link>
            {
                (props.authIsReady || props.logOutStatus)
                ?
                (    props.authStatus===null
                    ?
                    (
                        <SignedOutLinks />
                    )
                    :
                    (
                        <SignedInLinks />
                    )
                )
                :
                (
                    null
                )
            }
            
        </div>
    )
}
const mapStateToProps = (state, ownProps)=>{
    return{
        authStatus: state.auth.loggedInUID,
        authIsReady: state.auth.authIsReady,
        logOutStatus: state.auth.logOutStatus
    }
};
export default connect(mapStateToProps)(Navbar)
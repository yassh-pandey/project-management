import React, {useState} from 'react'
import {logIn} from '../../actions/authAction'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import '../../styles/Form.css'
const SignIn = (props)=>{
    const [getState, setState] = useState({"email": "",
                                            "password": ""});
    if(! (props.authIsReady || props.logOutStatus)){
        return <div className="loading">Loading...</div>
    }
    else{
        if(props.authStatus!==null){
            return <Redirect to="/" />
        }
    }   
    const handelChange = (e)=>{
        const element = e.currentTarget;
        if(element.id === "SignIn-email"){
            setState({...getState, "email": element.value});
        }
        else if(element.id === "SignIn-password"){
            setState({...getState, "password": element.value});
        }
    }
    const handelFocus = (e)=>{
        const ele = e.currentTarget;
        ele.style.borderBottom = "3px solid #79AAAE";
        ele.previousElementSibling.style.transform = "translateY(8px) scale(0.7)";
    }
    const handelBlur = (e)=>{
        const ele = e.target;
        if(ele.id ==='SignIn-email'){
            if(getState.email === ""){
                ele.previousElementSibling.style.transform = "translateY(50px) scale(1)";
            }
        }
        if(ele.id === 'SignIn-password'){
            if(getState.password === ""){
                ele.previousElementSibling.style.transform = "translateY(50px) scale(1)";
            }
        }
        ele.style.borderBottom = "3px solid #A9A9A9";
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        props.logIn(getState);
        setState({...getState, "password": "", "email": ""});
    }
    return(
            <form autoComplete="off" className="form" onSubmit={handelSubmit}>
                <h2>Login</h2>
                <label htmlFor="SignIn-email">Email</label>
                <input type="email" id="SignIn-email" value={getState.email} onBlur={(e) => handelBlur(e)} onFocus={(e) => handelFocus(e)} onChange={ (e) => handelChange(e) }/>
                <label htmlFor="SignIn-password">Password</label>
                <input type="password" id="SignIn-password" value={getState.password} onBlur={(e) => handelBlur(e)} onFocus={(e) => handelFocus(e)} onChange={handelChange}/>
                <input type="submit" value="Login" id="submitBtn"/>
                <div className={`form-status ${props.logInStatusColor}`}>{props.logInStatus}</div>
            </form>
    )
    }
const mapDispatchToProps = (dispatch, ownProps)=>{
    return({
        'logIn': (credentials) => dispatch(logIn(credentials))
    })
}
const mapStateToProps = (state, ownProps)=>{
    return(
        {
            logInStatus: state.auth.logInStatus,
            logInStatusColor: state.auth.logInStatusColor,
            authStatus: state.auth.loggedInUID,
            authIsReady: state.auth.authIsReady,
            logOutStatus: state.auth.logOutStatus
        }
    )
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
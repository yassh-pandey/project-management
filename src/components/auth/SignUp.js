import React, {useState} from 'react'
import {connect} from 'react-redux'
import {signUp} from '../../actions/authAction'
import {Redirect} from 'react-router-dom'
import '../../styles/Form.css'
const SignUp = (props)=>{
    const [getState, setState] = useState({"email": "",
                                            "password": "",
                                            "firstName": "",
                                            "lastName": ""
                                        });
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
        if(element.id === "SignUp-email"){
            setState({...getState, "email": element.value});
        }
        else if(element.id === "SignUp-password"){
            setState({...getState, "password": element.value});
        }
        else if(element.id === "SignUp-firstName"){
            setState({...getState, "firstName": element.value});
        }
        else if(element.id === "SignUp-lastName"){
            setState({...getState, "lastName": element.value});
        }
    }
    const handelFocus = (e)=>{
        const ele = e.currentTarget;
        ele.style.borderBottom = "3px solid #79AAAE";
        ele.previousElementSibling.style.transform = "translateY(8px) scale(0.7)";
    }
    const handelBlur = (e)=>{
        const ele = e.target;
        if(ele.id ==='SignUp-email'){
            if(getState.email === ""){
                ele.previousElementSibling.style.transform = "translateY(50px) scale(1)";
            }
        }
        if(ele.id === 'SignUp-password'){
            if(getState.password === ""){
                ele.previousElementSibling.style.transform = "translateY(50px) scale(1)";
            }
        }
        if(ele.id === 'SignUp-firstName'){
            if(getState.firstName === ""){
                ele.previousElementSibling.style.transform = "translateY(50px) scale(1)";
            }
        }
        if(ele.id === 'SignUp-lastName'){
            if(getState.lastName === ""){
                ele.previousElementSibling.style.transform = "translateY(50px) scale(1)";
            }
        }
        ele.style.borderBottom = "3px solid #A9A9A9";
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        props.signUp(getState);
        setState({...getState, "password": "", "email": "", "firstName": "", "lastName": ""});
    }
    return(
        <form autoComplete="off" className="form" onSubmit={handelSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor="SignUp-email">Email</label>
            <input type="email" id="SignUp-email" value={getState.email} onBlur={(e) => handelBlur(e)} onFocus={(e) => handelFocus(e)} onChange={ (e) => handelChange(e) }/>
            <label htmlFor="SignUp-password">Password</label>
            <input type="password" id="SignUp-password" value={getState.password} onBlur={(e) => handelBlur(e)} onFocus={(e) => handelFocus(e)} onChange={handelChange}/>
            <label htmlFor="SignUp-firstName">First Name</label>
            <input type="text" id="SignUp-firstName" value={getState.firstName} onBlur={(e) => handelBlur(e)} onFocus={(e) => handelFocus(e)} onChange={ (e) => handelChange(e) }/>
            <label htmlFor="SignUp-lastName">Last Name</label>
            <input type="text" id="SignUp-lastName" value={getState.lastName} onBlur={(e) => handelBlur(e)} onFocus={(e) => handelFocus(e)} onChange={ (e) => handelChange(e) }/>
            <input type="submit" value="Sign up" id="submitBtn"/>
            <div className={`form-status ${props.signUpStatusColor}`}>{props.signUpStatus}</div>
        </form>
    )
    }
    const mapStateToProps = (state, ownProps)=>{
        return{
            'signUpStatus': state.auth.signUpStatus,
            'signUpStatusColor': state.auth.signUpStatusColor,
            'authStatus': state.auth.loggedInUID,
            'authIsReady': state.auth.authIsReady,
            'logOutStatus': state.auth.logOutStatus
        }
    }
    const mapDispatchToProps = (dispatch, ownProps)=>{
        return {
            signUp: (credentials)=>dispatch(signUp(credentials))
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
import firebaseConfig from '../firebaseConfig'

export const authInitialState = {
    "logInStatus": null,
    "logInStatusColor": "transparent",
    "signUpStatus": null,
    "signUpStatusColor": "transparent",
    "loggedInEmail": null,
    "loggedInUID": null,
    "userDisplayName": null,
    "authIsReady": false,
    "logOutStatus": null
};
const authReducer = (state = authInitialState, action)=>{
    if(action.type==='LOG_IN_SUCCESS'){
        return {...state, "logInStatus": action.logInStatus, "logInStatusColor": "success"};
    }
    if(action.type==='LOG_IN_ERROR'){
        return {...state, "logInStatus": action.err.message, "logInStatusColor": "danger"};
    }
    if(action.type==='SET_CURRENT_USER'){
        return {...state, "loggedInUID": action.loggedInUID, 'loggedInEmail': action.loggedInEmail,
         'userDisplayName': action.userDisplayName , "authIsReady": action.authIsReady, "logoutStatus": action.logOutStatus}
    }
    if(action.type==='SIGN_UP_SUCCESS'){
        return {...state, "signUpStatus": action.signUpStatus, "signUpStatusColor": "success", 
        "userDisplayName": firebaseConfig.auth().currentUser.displayName};
    }
    if(action.type==='SIGN_UP_ERROR'){
        return {...state, "signUpStatus": action.err.message, "signUpStatusColor": "danger"};
    }
    if(action.type==='LOG_OUT'){
        return {...state, ...action.authInitialState, 'logOutStatus': true, "authIsReady": true}
    }
    if(action.type==="INITIALIZE_ADMIN"){
        return {...state, isAdmin: action.isAdmin}
    }
    return state;
};
export default authReducer;
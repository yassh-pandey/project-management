import firebaseConfig from '../firebaseConfig'
import {authInitialState} from '../reducers/authReducer'
export const setCurrentUser = (user)=>{
    return (dispatch, getState)=>{
        dispatch({
            'type': 'SET_CURRENT_USER',
            "loggedInEmail": user.email,
            "loggedInUID": user.uid,
            "userDisplayName": user.displayName,
            "authIsReady": true,
            "logOutStatus": null
        });
    }
};
export const logOut = ()=>{
    return (dispatch, getState)=>{
        dispatch({
            type: 'LOG_OUT',
            authInitialState
        });
    }
};

export const logIn = (credentials)=>{
    return (dispatch, getState) => {
        const auth = firebaseConfig.auth();
        auth.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(()=>{
                dispatch({
                    "type": 'LOG_IN_SUCCESS',
                    "logInStatus": "Successfully logged in."
                }
                );
            })
            .catch(err=>{
                dispatch({
                    "type": 'LOG_IN_ERROR',
                    err
                });
            });
    }
}

export const signUp = (credentials)=>{
    return (dispatch, getState)=>{
        const auth = firebaseConfig.auth();
        const fireStore = firebaseConfig.firestore();
        auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then(()=>{
                const user = auth.currentUser;
                fireStore.collection('users').doc(user.uid)
                    .set({
                        "email": credentials.email,
                        "firstName": credentials.firstName,
                        "lastName": credentials.lastName,
                        "UID": user.uid
                    });
            })
            .then(()=>{
                const displayName = credentials.firstName[0]+credentials.lastName[0];
                const user = auth.currentUser;
                return user.updateProfile({displayName})
            })
            .then(()=>{
                dispatch({
                    "type": 'SIGN_UP_SUCCESS',
                    "signUpStatus": "Successfully signed up and automatically logged in."
                }
                );
            })
            .catch(err=>{
                dispatch({
                    "type": 'SIGN_UP_ERROR',
                    err
                });
            });
    }
}
export const initializeAdmin = (user)=>{
    return (dispatch, getState)=>{
        user.getIdTokenResult()
            .then(idTokenResult=>{
                if(idTokenResult.claims.admin){
                    dispatch(
                        {
                            type: "INITIALIZE_ADMIN",
                            isAdmin: true
                        }
                    );
                }
                else{
                    dispatch(
                        {
                            type: "INITIALIZE_ADMIN",
                            isAdmin: false
                        }
                    );
                }
            })
    };
}
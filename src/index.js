import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'
import App from './App'
import {setInitState} from './actions/projectAction'
import {setNotificationInitialState} from './actions/notificationAction'
import './index.css'
import firebaseConfig from './firebaseConfig'
import {setCurrentUser, logOut, initializeAdmin} from './actions/authAction'
export const store = createStore(rootReducer, applyMiddleware(thunk));
firebaseConfig.auth().onAuthStateChanged(user=>{
    if(user){
        store.dispatch(setCurrentUser(user));
        store.dispatch(initializeAdmin(user));
        store.dispatch(setInitState());
        firebaseConfig.firestore().collection('notifications')
            .onSnapshot((qs)=>{
                store.dispatch(setNotificationInitialState());
            });
    }
    else{
        store.dispatch(logOut());
    }
});
store.subscribe(()=>{
    console.log(store.getState())
});
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
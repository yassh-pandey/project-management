import authReducer from './authReducer';
import projectReducer from './projectReducer';
import notificationReducer from './notificationReducer'
import incrementReducer from './incrementReducer'
import {combineReducers} from 'redux'
import commentReducer from './commentReducer';
const rootReducer = combineReducers({
                                    "auth": authReducer,
                                    "project": projectReducer,
                                    "notification": notificationReducer,
                                    "comment": commentReducer,
                                    "increment": incrementReducer
                                });
export default rootReducer;
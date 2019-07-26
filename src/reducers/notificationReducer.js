const initstate = {
    "notifications": null
};
const notificationReducer = (state=initstate, action)=>{
    if(action.type==='SET_NOTIFICATION_INITIAL_STATE'){
        return {...state, "notifications": action.notifications};
    }
    return state;
}
export default notificationReducer;
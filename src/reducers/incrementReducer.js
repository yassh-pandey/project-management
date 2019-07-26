const initstate = {
    "increment": 0
};
const incrementReducer = (state=initstate, action)=>{
    if(action.type==='INCREMENT_REDUCER_WORK'){
        return {...state, "increment": (state.increment + 1)};
    }
    return state;
}
export default incrementReducer;
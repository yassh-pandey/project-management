const initstate = {comments: []};
const commentReducer = (state = initstate, action)=>{
    if(action.type==="POST_COMMENT"){
        return {...state, comments: [ action.postedComment, ...state.comments ]};
    }
    if(action.type==='SET_COMMENTS'){
        return {...state, comments: [...action.comments]};
    }
    if(action.type==='RESET_COMMENTS'){
        return {...state, comments: []}
    }
    return state;
}
export default commentReducer;
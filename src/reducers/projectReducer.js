const initState = {"projects": [],
                    "dataLoaded": false
                };

const projectReducer = (state = initState, action)=>{
    if(action.type === 'ADD_PROJECT'){
        const project = action.project;
        const projects = [project, ...state.projects];
        return {...state, projects};
    }
    if(action.type === 'SET_INIT_STATE'){
        return {...state, "projects": [...action.state], dataLoaded: true};
    }
    if(action.type === 'ADD_PROJECT_ERROR'){
        console.log(action.err);
        return{...state}
    }
    if(action.type==='APPROVE_PROJECT'){
        return {...state, "projects": [...action.projects]};
    }
    if(action.type==='CANCEL_APPROVEL'){
        return {...state, "projects": [...action.projects]};
    }
    return state;
};
export default projectReducer;
import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import '../../styles/Form.css'
import {connect} from 'react-redux'
import {createProject} from '../../actions/projectAction'
const CreateProject = (props)=>{
    const [getState, setState] = useState({"title": "",
                                            "content": ""
                                        });
            if(! (props.authIsReady || props.logOutStatus) ){
                return <div className="loading">Loading...</div>
            }
            else{
                if(props.authStatus===null){
                    return <Redirect to="/welcome" />
                }
            }                                 
    const handelChange = (e)=>{
        const element = e.currentTarget;
        if(element.id === "CreateProject-title"){
            setState({...getState, "title": element.value});
        }
        else if(element.id === "CreateProject-content"){
            setState({...getState, "content": element.value});
        }
    }
    const handelFocus = (e)=>{
        const ele = e.currentTarget;
        ele.style.borderBottom = "3px solid #79AAAE";
        ele.previousElementSibling.style.transform = "translateY(8px) scale(0.7)";
    }
    const handelBlur = (e)=>{
        const ele = e.target;
        if(ele.id ==='CreateProject-title'){
            if(getState.title === ""){
                ele.previousElementSibling.style.transform = "translateY(50px) scale(1)";
            }
        }
        if(ele.id === 'CreateProject-content'){
            if(getState.content === ""){
                ele.previousElementSibling.style.transform = "translateY(50px) scale(1)";
            }
        }
        ele.style.borderBottom = "3px solid #A9A9A9";
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        props.createProject(getState);
        setState({...getState, "title": "", "content": ""});
    }
    return(
        <form autoComplete="off" className="form" onSubmit={handelSubmit}>
            <h2>Create New Project</h2>
            <label htmlFor="CreateProject-title">Title</label>
            <input type="text" id="CreateProject-title" value={getState.title} onBlur={(e) => handelBlur(e)} onFocus={(e) => handelFocus(e)} onChange={ (e) => handelChange(e) }/>
            <textarea value={getState.content} onChange={handelChange} placeholder="Enter the content here..." id="CreateProject-content"></textarea>
            <input type="submit" value="Create Project" id="submitBtn"/>
        </form>
    )
}
const mapStateToProps = (state, ownProps)=>{
    return(
        {
            authStatus: state.auth.loggedInUID,
            authIsReady: state.auth.authIsReady
        }
    )
};
const mapDispatchToProps = (dispatch, ownProps)=>{
    return{
        "createProject": (project) => {
            return(
                dispatch(createProject(project))
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
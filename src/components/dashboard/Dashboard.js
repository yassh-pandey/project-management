import React, {Fragment} from 'react'
import '../../styles/Dashboard.css'
import ProjectList from '../project/ProjectList'
import Notification from './Notification'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import loading from '../../icons/loading.svg'

const Dashboard = (props)=>{
    const {projects} = props;
    if(! (props.authIsReady || props.logOutStatus)){
        return <div className="loading">Loading...</div>
    }
    else{
        if(props.authStatus===null){
            return <Redirect to="/welcome" />
        }
    }
    return(
        <Fragment>
            {
                (props.dataLoaded)  ?
                (
                    (props.projects.length===0)
                    ?
                    (
                        <div className="Dashboard-grid">
                            <div className="Dashboard-no-post">
                                <p>
                                    There are no projects to display right now. Click on `New Project` to add a new one.
                                </p>
                            </div>
                            <Notification />
                        </div>                        
                    )
                    :
                    (
                        <div className="Dashboard-grid">
                            <ProjectList projects={projects}/>
                            <Notification />
                        </div>
                    )
                    
                )                   
                :
                (
                    <div className="Dashboard-grid">
                        <div className="Dashboard-loading-logo-wrapper">
                            <img className="Dashboard-loading-logo-image" alt="Loading data" src={loading}/>
                        </div>  
                    </div>
                )
            }
        </Fragment>
    )
}
const mapStateToProps = (state, ownProps)=>{
    return{
        projects: state.project.projects,
        dataLoaded: state.project.dataLoaded,
        authStatus: state.auth.loggedInUID,
        authIsReady: state.auth.authIsReady,
        logOutStatus: state.auth.logOutStatus
    }
};
export default connect(mapStateToProps)(Dashboard);
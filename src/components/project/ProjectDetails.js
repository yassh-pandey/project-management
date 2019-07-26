import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Comment from './Comment'
import {setComments} from '../../actions/commentAction'
import {approveProject, cancelApproval} from '../../actions/projectAction'
import '../../styles/ProjectDetails.css'
import CommentList from './CommentList';
import moment from 'moment'
const ProjectDetails = ({increment,isAdmin,project, authIsReady, logOutStatus, authStatus, approveProject, cancelApproval, setComments})=>{
    useEffect(_=>{
        if(project){
            setComments(project.projectId);
        }
    },[project, setComments,increment]);
    const handleApproveClick = e=>{
        const approveMessage = document.querySelector('.approveMessage');
        const approvalButton = document.querySelector('.ProjectDetails-approve');
        if(project.approved==='approved'){
            cancelApproval(project.projectId);
            approvalButton.textContent = "Grant Approval";
            approveMessage.textContent = 'Approval Cancelled Successfully';
            approveMessage.classList.remove('grantApproval');
            approveMessage.classList.add('cancelApproval');
        }
        else{
            approveProject(project.projectId);
            approvalButton.textContent = "Cancel Approval";
            approveMessage.textContent = 'Approval Granted Successfully';
            approveMessage.classList.remove('cancelApproval');
            approveMessage.classList.add('grantApproval');
        }
        approveMessage.classList.remove('hide');
        approveMessage.classList.add('show');
    };
    if(! (authIsReady || logOutStatus) ){
        return <div className="loading">Loading...</div>
    }
        if(authStatus===null){
            return <Redirect to="/welcome" />
        }
        else if(project){
            //Dispatching action to set the initial state of commments after database fetch
            return(
                <div className="ProjectDetails-flex-container">
                    <div className="ProjectDetails-wrapper">
                        <div className="ProjectDetails-title">
                            {project.title}
                        </div>
                        <div className="ProjectDetails-body">
                            {project.content}
                        </div>
                        <div className="ProjectDetails-posted-by">
                            {`${project.authorFirstName} ${project.authorLastName}`}
                        </div>
                        <div className="ProjectDetails-posted-time">
                            {moment(project.createdAt).format("dddd, MMMM Do YYYY, h:mm a")}
                        </div>
                    </div>
                    <div className="approveMessage hide">
                    </div>
                    {   isAdmin &&
                        <div className="ProjectDetails-approve-wrapper">
                            <div className="ProjectDetails-approve" onClick={handleApproveClick}>
                                {   (project.approved==='approved')
                                    ?
                                    `Cancel Approval`
                                    :
                                    `Grant Approval`
                                }
                            </div>
                        </div>
                    }
                    <Comment postedByUID={authStatus} projectIdForThisComment={project.projectId}/>
                    <CommentList projectId={project.projectId}/>
                </div>
            )
        }
        else{
            return(
                <div className="loadingProject">
                    Loading Project...
                </div>
            )
        }
    }
const mapDispatchToProps = (dispatch, ownProps)=>{
    return{
        setComments: (projectId) => dispatch(setComments(projectId)),
        approveProject: (projectId)=> dispatch(approveProject(projectId)),
        cancelApproval: (projectId)=> dispatch(cancelApproval(projectId))
    }
}
const mapStateToProps = (state, ownProps)=>{
    return(
        {
            project: state.project.projects.find((project)=>{
                return (project.projectId === ownProps.match.params.projectid)
            }),
            authStatus: state.auth.loggedInUID,
            authIsReady: state.auth.authIsReady,
            logOutStatus: state.auth.logOutStatus,
            isAdmin: state.auth.isAdmin,
            increment: state.increment.increment
        }
    )
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails)
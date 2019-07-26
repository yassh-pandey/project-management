import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import approved from '../../icons/checked.svg'
import '../../styles/Card.css'
const ProjectSummary = ({project})=>{
    return(
        <Fragment>
            {(project) &&
            (<div className="Card-wrapper">
                    <div className={`Card-approved-wrapper ${project.approved}`}>
                        <img src={approved} alt="Approved" className="Card-approved"/>
                    </div>
                    <div className="Card-title">
                        <Link to={`/project/${project.projectId}`}>
                            {project.title}
                        </Link>
                    </div>
                    <div className="Card-posted-by">
                        {`${project.authorFirstName} ${project.authorLastName}`}
                    </div>
                    <div className="Card-posted-time">
                        {moment(project.createdAt).calendar()}
                    </div>
            </div>)
            }
        </Fragment>
        )}

export default ProjectSummary
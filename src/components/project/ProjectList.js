import React from 'react'
import ProjectSummary from './ProjectSummary'
const ProjectList = ({projects})=>{
    return(
        <div className="Dashboard-project-list">
           {
                projects &&
                projects.map(project=>{
                    //console.log(project)
                    return(
                            <ProjectSummary project={project} key={project.projectId}/> 
                    )
                }
            )
        }
        </div>
    )
}
export default ProjectList
import React from 'react'
import '../../styles/ResourceNotFound.css'
function ResourceNotFound() {
    return (
        <div className="ResourceNotFound-wrapper">
            <div className="ResourceNotFound-title">oops ! error 404</div>
            <div className="ResourceNotFound-body">The resource you are trying to access 
                does not exist.</div>
            <div className="ResourceNotFound-ps">Redirect back to the main page to continue
                your journey.
            </div>
        </div>
    )
}

export default ResourceNotFound

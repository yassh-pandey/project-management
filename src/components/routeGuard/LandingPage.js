import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/LandingPage.css'
import atom from '../../icons/atom.svg'

function LandingPage() {
    return (
        <div className="LandingPage-wrapper">
            <div className="LandingPage-atom-wrapper">
                <img className="LandingPage-atom" src={atom} alt="Atom" />
            </div>
            <div className="LandingPage-title LandingPage-item">Welcome to 
                <span className="LandingPage-projectManagement"> projectManagement</span>
                </div>
            <div className="LandingPage-message LandingPage-item">
                A platform where team members can share their project timeline as work progresses.
            </div>
            <div className="LandingPage-asking LandingPage-item">
                New to projectManagement: Quickly <Link to="/signup">Sign up</Link> to join the forum !
            </div>
            <div className="LandingPage-asking LandingPage-item">
                Already an existing user: <Link to="/signin">Login</Link> to access the dashboard.
            </div>
        </div>
    )
}

export default LandingPage

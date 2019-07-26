import React from 'react';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/project/ProjectDetails'
import ResourceNotFound from './components/routeGuard/ResourceNotFound'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import LandingPage from './components/routeGuard/LandingPage'
import CreateProject from './components/project/CreateProject'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/project/:projectid' component={ProjectDetails}></Route>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/createproject" component={CreateProject} />
          <Route exact path="/welcome" component={LandingPage} />
          <Route path="*" component={ResourceNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import _ from 'lodash';

import CreateStateForm from './components/CreateStateForm';
import ShowStates from './components/ShowStates';
import StateDetail from './components/StateDetail';
import Dashboard from './components/Dashboard';
import SchoolDetail from './components/SchoolDetail';
import NavBar from './components/NavBar';
import Sandbox from './components/Sandbox';
import EditHomepage from './components/EditHomePage';
import CreateTeamMember from './components/CreateTeamMember'

class App extends Component
{


  render() {
    return (
      <div className="container-fluid">
          <NavBar/>
          <Switch>
              <Route path="/state/:stateName" component={StateDetail} exact={true}/>
              <Route path="/state/:stateName/:schoolName" component={SchoolDetail} exact={true}/>
              <Route path="/edit/homepage" component={EditHomepage} exact={true}/>

              <Route path="/createteammember" component={CreateTeamMember} exact={true}/>
              <Route path="/createstate" component={CreateStateForm} exact={true}/>
              <Route path="/sandbox" component={Sandbox} exact={true}/>
              <Route path="/" component={Dashboard} exact={true}/>

          </Switch>
      </div>
    );
  }
}

export default App;

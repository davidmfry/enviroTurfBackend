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
import TeamMembers from './components/TeamMember/TeamMembers';
import EditTeamMember from './components/TeamMember/EditTeamMember';
import CreateProduct from './components/Products/CreateProduct';
import Products from './components/Products/Products';
import EditProducts from './components/Products/EditProducts';
import EditMissionStatment from './components/EditMissionStatment';
import CreatePage from './components/CreatePage';
import EditPage from './components/EditPage';
import CreateNewsItem from './components/CreateNewsItem';
import NewsItems from './components/NewsItems';

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
              <Route path="/edit/missionstatement" component={EditMissionStatment} exact={true}/>
              <Route path="/edit/product/:id" component={EditProducts} exact={true}/>
              <Route path="/edit/teammember/:id" component={EditTeamMember} exact={true}/>
              <Route path="/newsitems" component={NewsItems} exact={true}/>
              <Route path="/products" component={Products} exact={true}/>
              <Route path="/teammembers" component={TeamMembers} exact={true}/>
              <Route path="/createNewsItem" component={CreateNewsItem} exact={true}/>
              <Route path="/createProduct" component={CreateProduct} exact={true}/>
              <Route path="/createteammember" component={CreateTeamMember} exact={true}/>

              <Route path="/createstate" component={CreateStateForm} exact={true}/>
              <Route path="/sandbox" component={Sandbox} exact={true}/>
              <Route path="/editpage" component={EditPage} exact={true}/>
              <Route path="/createpage" component={CreatePage} exact={true}/>
              <Route path="/" component={Dashboard} exact={true}/>

          </Switch>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';



import NavBar from './NavBar';
import EditProducts from "./Products/EditProducts";
import EditMissionStatment from "./EditMissionStatment";
import Dashboard from "./Dashboard";
import CreateStateForm from "./CreateStateForm";
import NewsItems from "./NewsItems";
import CreateProduct from "./Products/CreateProduct";
import Products from "./Products/Products";
import CreatePage from "./CreatePage";
import SchoolDetail from "./SchoolDetail";
import TeamMembers from "./TeamMember/TeamMembers";
import CreateNewsItem from "./CreateNewsItem";
import SignUp from "./SignUp";
import EditPage from "./EditPage";
import EditTeamMember from "./TeamMember/EditTeamMember";
import Sandbox from "./Sandbox";
import StateDetail from "./StateDetail";
import EditHomepage from "./EditHomePage";
import CreateTeamMember from "./CreateTeamMember";
import CreateBaseballSchool from "./CreateBaseballSchool"
import Login from "./Login";
import ShowBaseballSoftballSchool from './ShowBaseballSoftballSchool';
import EditBaseballSoftball from './EditBaseballSoftball';


class Navigation extends Component
{
    render() {
        return (
            <div>
                {
                    this.props.authUser
                        ? <NavigationAuth/>
                        : <NavigationNonAuth/>
                }
            </div>
        );
    }
}

const myRedirect = () =>
{
    return (
        <Redirect to={"/"}/>
    )
}

const NavigationAuth = () =>
{
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path="/state/:stateName" component={StateDetail} exact={true}/>
                <Route path="/state/:stateName/:schoolName" component={SchoolDetail} exact={true}/>
                <Route path="/edit/homepage" component={EditHomepage} exact={true}/>
                <Route path="/edit/missionstatement" component={EditMissionStatment} exact={true}/>
                <Route path="/edit/product/:id" component={EditProducts} exact={true}/>
                <Route path="/edit/teammember/:id" component={EditTeamMember} exact={true}/>
                <Route path="/edit/baseballsoftball" component={ShowBaseballSoftballSchool} exact={true}/>
                <Route path="/edit/baseballsoftball/:id" component={EditBaseballSoftball} exact={true}/>
                <Route path="/newsitems" component={NewsItems} exact={true}/>
                <Route path="/products" component={Products} exact={true}/>
                <Route path="/teammembers" component={TeamMembers} exact={true}/>
                <Route path="/createNewsItem" component={CreateNewsItem} exact={true}/>
                <Route path="/createProduct" component={CreateProduct} exact={true}/>
                <Route path="/createteammember" component={CreateTeamMember} exact={true}/>
                <Route path="/createbaseballschool" component={CreateBaseballSchool} exact={true}/>

                <Route path="/createstate" component={CreateStateForm} exact={true}/>
                <Route path="/sandbox" component={Sandbox} exact={true}/>
                <Route path="/editpage" component={EditPage} exact={true}/>
                <Route path="/createpage" component={CreatePage} exact={true}/>
                <Route path="/dashboard" component={Dashboard} exact={true}/>

            </Switch>
        </div>
    )

}



const NavigationNonAuth = () =>
{
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} exact={true}/>
                <Route path="/" component={Login} exact={true}/>

                {/*<Route path="/signup" component={SignUp} exact={true}/>*/}
            </Switch>
        </div>
    )
}

Navigation.propTypes = {};
Navigation.defaultProps = {};

export default Navigation;

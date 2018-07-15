import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { auth } from '../firebase';

class NavBar extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            fromPath: '/'
        }
    }

    logout()
    {

        auth.signOut();
        <Redirect to={this.state.fromPath}/>
    }

    render() {
        return (
            <nav className="navbar">
                {/*<button*/}
                    {/*className="navbar-toggler hidden-sm-up"*/}
                    {/*type="button"*/}
                    {/*data-toggle="collapse"*/}
                    {/*data-target="#CollapseNavbar"*/}
                {/*>*/}
                    {/*&#9776;*/}
                {/*</button>*/}
                <div>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/editpage">Edit</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/createpage">Create</Link>
                        </li>

                        <li className="nav-item float-right" onClick={() => this.logout()}>
                            <Link className="nav-link" to="/">
                                Sign Out
                            </Link>

                        </li>
                    </ul>
                </div>

            </nav>

        )
    }
}

NavBar.propTypes = {};
NavBar.defaultProps = {};

export default NavBar;

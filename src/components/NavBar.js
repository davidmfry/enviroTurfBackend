import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavBar extends Component {
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
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/editpage">Edit</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/createpage">Create</Link>
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

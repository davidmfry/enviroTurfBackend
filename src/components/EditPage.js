import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShowStates from './ShowStates';

class EditPage extends Component {
    render() {
        return (
            <div>
                <h1>Edit Items:</h1>
                <ul className={"list-group"}>
                    <li className="list-group-item">
                        <Link to="/edit/homepage">Edit Homepage Items</Link>
                    </li>

                    <li className="list-group-item">
                        <Link to="/edit/missionstatement">Edit Mission Statement</Link>
                    </li>

                    <li className="list-group-item">
                        <Link to="/teammembers">Team Members</Link>
                    </li>

                    <li className="list-group-item">
                        <Link to="/products">Products</Link>
                    </li>

                    <li className="list-group-item">
                        <Link to="/newsitems">News Items</Link>
                    </li>

                </ul>
                <br/>
                <ShowStates/>
            </div>
        );
    }
}

EditPage.propTypes = {};
EditPage.defaultProps = {};

export default EditPage;

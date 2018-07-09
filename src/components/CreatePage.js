import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CreatePage extends Component {
    render() {
        return (
            <div>
                <h1>Create Items:</h1>
                <ul className={"list-group"}>
                    <li className="list-group-item">
                        <Link to="/createteammember">Create Team Member</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/createstate">Created New School</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/createProduct">Create Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/createnewsitem">Create News Item</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

CreatePage.propTypes = {};
CreatePage.defaultProps = {};

export default CreatePage;

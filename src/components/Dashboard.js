import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EditPage from './EditPage';
import CreatePage from './CreatePage';

import ShowStates from './ShowStates'

const backendSystemName = "EnviroTurf"

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">{`${backendSystemName} Dashboard`}</h1>
                        <p className="lead">Website backend version 1.0</p>
                    </div>
                </div>
                <EditPage/>
                <br/>
                <CreatePage/>
            </div>
        );
    }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;

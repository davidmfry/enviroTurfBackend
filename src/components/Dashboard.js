import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ShowStates from './ShowStates'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <ShowStates/>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;

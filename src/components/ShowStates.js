import React, {Component} from 'react';
import {database} from "../firebase";
import { Link } from 'react-router-dom'
import _ from 'lodash'

import PropTypes from 'prop-types';

class ShowStates extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            states: ''
        }
    }

    componentDidMount()
    {
        database.ref("states").on('value', (snapshot) => {
            this.setState({states: snapshot.val()})
        })
    }

    renderState()
    {
        return _.map(this.state.states, (usState, key) => {
            return (
                <li key={key} className="list-group-item">
                    <Link to={{
                        pathname: `/state/${key}`,
                        state: {schools: usState.schools}
                    }}>{key}</Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Edit States</h1>
                <ul className="list-group">
                    {this.renderState()}
                </ul>

            </div>
        );
    }
}

ShowStates.propTypes = {};
ShowStates.defaultProps = {};

export default ShowStates;

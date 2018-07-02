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
                <div key={key}>
                    <Link to={{
                        pathname: `/state/${key}`,
                        state: {schools: usState.schools}
                    }}><h4>{key}</h4></Link>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>States</h2>
                {this.renderState()}
            </div>
        );
    }
}

ShowStates.propTypes = {};
ShowStates.defaultProps = {};

export default ShowStates;

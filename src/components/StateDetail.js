import React, {Component} from 'react';
import _ from 'lodash'
import {database} from "../firebase";
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

class StateDetail extends Component
{
    constructor (props)
    {
        super(props)
        this.state ={
            schools:''
        }
    }

    componentDidMount ()
    {
        const { stateName } = this.props.match.params;
        database.ref("states").child(`${stateName}`).on('value', (snapshot) => {
            this.setState({...snapshot.val()})
        })
    }

    renderSchools = () =>
    {
        return _.map(this.state.schools, (school, key) => {
            console.log(key)
            return (
                <Link key={key}
                      to={{
                          pathname: `/state/${this.props.match.params.stateName}/${school.schoolName}`,
                          state: {id: key},
                      }}>
                    <li className="list-group-item">{school.schoolName}</li>
                </Link>
            )
        })
    };

    render() {
        const { stateName } = this.props.match.params;
        return (
            <div>
                <h1>{stateName} Details</h1>
                <h2>Schools</h2>
                <ul className="list-group">
                    {this.renderSchools()}

                </ul>
            </div>

        );
    }
}

StateDetail.propTypes = {};
StateDetail.defaultProps = {};

export default StateDetail;

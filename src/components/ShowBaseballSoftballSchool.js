import React, {Component} from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import {database} from "../firebase";

import PropTypes from 'prop-types';

class ShowBaseballSoftballSchool extends Component {
    constructor (props)
    {
        super(props);
        this.state ={
            schools:''
        }
    }

    componentDidMount ()
    {
        const { stateName } = this.props.match.params;
        database.ref("baseballsoftball").child('schools').on('value', (snapshot) => {
            this.setState({schools: snapshot.val()})
        })
    }

    renderSchools = () =>
    {
        return _.map(this.state.schools, (school, key) => {
            return (
                <Link key={key}
                      to={{
                          pathname: `/edit/baseballsoftball/${key}`,
                          state: {id: key},
                      }}>
                    <li className="list-group-item">{school.schoolName}</li>
                </Link>
            )
        })
    };

    render() {
        return (
            <div>
                <h1>Baseball and Softball </h1>
                <h2>Fields</h2>
                <ul className="list-group">
                    {this.renderSchools()}

                </ul>
            </div>

        );
    }
}

ShowBaseballSoftballSchool.propTypes = {};
ShowBaseballSoftballSchool.defaultProps = {};

export default ShowBaseballSoftballSchool;

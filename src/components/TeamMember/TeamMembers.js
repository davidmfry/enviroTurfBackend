import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import _ from 'lodash';

import { database } from "../../firebase";
import TeamMemberItem from'./TeamMemberItem';

class TeamMembers extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            teamMembers: ''
        }
    }


    componentDidMount()
    {
        database.ref("teammembers").on('value', (snapshot) => {
            this.setState({teamMembers: snapshot.val()})
        });
    }

    renderTeamMembers()
    {
        return _.map(this.state.teamMembers, (teamMember, key) => {
            return (
                <TeamMemberItem
                    key={key}
                    name={`${teamMember.firstName} ${teamMember.lastName}`}
                    onEditPress={() => this.handleOnEditPress(key)} />
            )
        })
    }

    handleOnEditPress(id)
    {
        this.props.history.push(`/edit/teammember/${id}`)
    }

    render() {

        return (
            <div>
                <h1>Team Members</h1>
                <ul className="list-group">
                    {this.renderTeamMembers()}
                </ul>

            </div>
        );
    }
}

TeamMembers.propTypes = {};
TeamMembers.defaultProps = {};

export default TeamMembers;

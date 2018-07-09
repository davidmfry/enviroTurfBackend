import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import _ from 'lodash';

import { database } from "../../firebase";
import ListItem from '../ListItem';
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
                <ListItem
                    key={key}
                    name={`${teamMember.firstName} ${teamMember.lastName}`}
                    hasEditButton = {true}
                    onEditPress={() => this.handleOnEditPress(key)}
                    onDeletePress={() => this.handleOnDeletePress(key)}
                />
            )
        })
    }

    handleOnEditPress(id)
    {
        this.props.history.push(`/edit/teammember/${id}`)
    }

    handleOnDeletePress(id)
    {
        database.ref('teammembers').child(id).remove();
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

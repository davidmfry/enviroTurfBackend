import React from 'react';
import PropTypes from 'prop-types';

function TeamMemberItem(props)
{
    return (
        <li className="list-group-item">{props.name}
            <button
                className="btn btn btn-primary float-right"
                onClick={props.onEditPress}
            >
                Edit
            </button>
        </li>
    );
}

TeamMemberItem.propTypes = {};
TeamMemberItem.defaultProps = {};

export default TeamMemberItem;

import React from 'react';
import PropTypes from 'prop-types';

function ListItem(props)
{
    return (
        <li className="list-group-item"><strong>{props.name}</strong> {props.info}
            <button
                className="btn btn btn-danger float-right"
                onClick={props.onDeletePress}
                style={{marginLeft: '10px'}}
            >
                Delete
            </button>
            {props.hasEditButton ? <button
                className="btn btn btn-primary float-right"
                onClick={props.onEditPress}
            >
                Edit
            </button> : null}



        </li>
    );
}

ListItem.propTypes = {};
ListItem.defaultProps = {};

export default ListItem;

import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

import {database} from "../firebase";

class NewsItems extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            newsItems: ''
        }
    }


    componentDidMount()
    {
        database.ref("newsitems").on('value', (snapshot) => {
            this.setState({newsItems: snapshot.val()})
        });
    }

    renderTeamMembers()
    {
        return _.map(this.state.newsItems, (newsItem, key) => {
            return (
                <ListItem
                    key={key}
                    name={`${newsItem.headline}`}
                    info={` || ${newsItem.description}`}
                    hasEditButton = {false}
                    onEditPress={() => this.handleOnEditPress(key)}
                    onDeletePress={() => this.handleOnDeletePress(key)}
                />
            )
        })
    }

    handleOnEditPress(id)
    {
        this.props.history.push(`/edit/newsItem/${id}`)
    }

    handleOnDeletePress(id)
    {
        database.ref('newsitems').child(id).remove();
    }

    render() {

        return (
            <div>
                <h1>Latest News Items</h1>
                <ul className="list-group">
                    {this.renderTeamMembers()}
                </ul>

            </div>
        );
    }
}

NewsItems.propTypes = {};
NewsItems.defaultProps = {};

export default NewsItems;

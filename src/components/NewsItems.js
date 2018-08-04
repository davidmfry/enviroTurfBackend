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
        // changes the object into an array to the news items can show the newwest item first.
        let newsItemsArray = _.values(this.state.newsItems)
        newsItemsArray.reverse();

        return _.map(newsItemsArray, (newsItem, key) => {
            return (
                <ListItem
                    key={key}
                    name={`${newsItem.headline}`}
                    info={` || ${newsItem.description}`}
                    hasEditButton = {true}
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

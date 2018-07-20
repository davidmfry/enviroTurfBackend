import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { database } from "../firebase";

import Video from './Video'



class Tutorials extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            videoItems: {}
        }
    }

    componentDidMount()
    {
        database.ref("tutorials").on('value', (snapshot) => {
            this.setState({videoItems: snapshot.val()})
        });
    }

    renderVideoItems ()
    {
        return _.map(this.state.videoItems, (video) => {
            return (
                <Video
                    source={video.videoSource}
                    title={video.title}
                    description={video.description}/>

            )
        })
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">{`Video Tutorials`}</h1>
                        <p className="lead">These are video tutorials teaching you how to use the enviroturf backend. If you have questions or would like to see a new video teaching you how to do something int he backend please email or call us!</p>
                    </div>
                </div>
                {this.renderVideoItems()}

            </div>
        );
    }
}

Tutorials.propTypes = {};
Tutorials.defaultProps = {};

export default Tutorials;

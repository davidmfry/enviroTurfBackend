import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Video extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{width: "40rem", marginTop: '4rem'}}>
                    <div className="card-img-top">
                        <div className="embed-responsive embed-responsive-21by9">
                            <iframe src={`https://www.youtube.com/embed/${this.props.source}`}
                                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                    </div>
                </div>





            </div>

        );
    }
}

Video.propTypes = {};
Video.defaultProps = {};

export default Video;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './imageCard.css'

class ImageCard extends Component {
    render() {
        return (
            <div className="card cardcontainer">
                <img className="card-img-top" src={`${this.props.imgSrc}`}  alt="Card image cap"/>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-danger btn-sm float-right"
                        onClick={this.props.onClick}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

ImageCard.propTypes = {};
ImageCard.defaultProps = {};

export default ImageCard;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {database} from "../firebase";
import _ from 'lodash';
import ImageCard from '../card/ImageCard';


const photoContainer = {
    display: 'flex',
    flex: 1,
}


class EditBaseballSoftball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrlInput: '',
            imageUrlsArray: [],
            schoolName: ''
        }
    }

    componentDidMount() {
        const {id} = this.props.location.state;
        database.ref("baseballsoftball").child(`schools`).child(`${id}`).on('value', (snapshot) => {
            this.setState({
                imageUrlsArray: snapshot.val().imageUrls,
                schoolName: snapshot.val().schoolName
            })
        })


    }

    renderSchoolImages() {
        return _.map(this.state.imageUrlsArray, (imageUrl, key) => {
            return (
                <ImageCard key={key} imgSrc={imageUrl} onClick={() => this.handleOnDeleteClick(imageUrl)}/>
            )
        })
    }

    handleAddButtonPress(imageURL) {
        const {id} = this.props.location.state;

        if (imageURL) {
            let newImageArray = this.state.imageUrlsArray;
            newImageArray.push(imageURL);

            this.setState({imageUrlsArray: newImageArray, imageUrlInput: ''});
            database.ref("baseballsoftball").child(`schools`).child(`${id}`).update({imageUrls: this.state.imageUrlsArray});
        }
        else {
            //TODO: Take out the alert and change the color and of the input and add an error in the placeholder
            alert("Please add an image url in to the add image input\nExample input: http://imagename.jpg");
            return 0
        }


    }

    handleOnDeleteClick(imageUrl) {
        const {id} = this.props.location.state;
        let indexToDelete = this.state.imageUrlsArray.indexOf(imageUrl);
        let currentImageUrlsArray = this.state.imageUrlsArray;
        let newArray = currentImageUrlsArray.filter(item => item !== this.state.imageUrlsArray[indexToDelete]);

        this.setState({imageUrlsArray: newArray});

        database.ref("baseballsoftball").child(`schools`).child(`${id}`).update({imageUrls: newArray});

    }

    render() {
        const {schoolName} = this.state;
        let schoolNameSplit = schoolName.split("-");
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">{schoolNameSplit[0].slice(0, -1)}</h1>
                    <p className="lead">{schoolNameSplit[1]}</p>
                    <button style={{marginTop: '10px', marginBottom: '10px'}} type="button" onClick={() => this.handleAddButtonPress(this.state.imageUrlInput)}
                            className="btn btn-primary btn-lg">Add New Images
                    </button>

                    <p style={{color: 'red'}}>WARNING: Image pixel ratio must be 1200x800</p>
                    <input
                        type="text"
                        name='imageURLs'
                        className="form-control no-border"
                        placeholder={"Add image urls. Example input: http://imagename.jpg"}
                        value={this.state.imageUrlInput}
                        onChange={e => this.setState({imageUrlInput: e.target.value})}
                    />

                </div>
                <div style={photoContainer}>
                {this.renderSchoolImages()}
            </div>
                <Link to={`/edit/baseballsoftball`}>Back to Fields</Link>
            </div>
        );
    }
}
EditBaseballSoftball.propTypes = {};
EditBaseballSoftball.defaultProps = {};

export default EditBaseballSoftball;

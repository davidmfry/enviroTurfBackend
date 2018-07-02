import React, {Component} from 'react';
import {database} from "../firebase";
import _ from 'lodash';

import ImageCard from '../card/ImageCard';

import PropTypes from 'prop-types';

const photoContainer = {
    display: 'flex',
}


const states = ["Alabama", "Arkansas", "Illinois", "Kansas", "Kentucky", "Louisiana", "Mississippi", "Missouri", "North Carolina", "Tennessee", "Texas", "Virginia"];

class CreateStateForm extends Component {
    constructor (props)
    {
        super(props)
        this.state = {
            usState: states[0],
            schoolName: '',
            imageUrlInput: '',
            imageUrls: []
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();

        const newStateItem = {
            schoolName: this.state.schoolName,
            imageUrls: this.state.imageUrls.toString(),


        };

        if(!newStateItem.schoolName.match(/\b\w+ - \b\w+/g))
        {
            // TODO: Do with out the popup change the css/ui to turn red
            alert('Please use this format: "name of school - city, state \n for the school" name');
            this.setState({schoolName: ''});
            return
        }
        if(newStateItem.imageURLs === '')
        {
            alert("Please add at least 1 image url.");
            return
        }



        database.ref("states").child(this.state.usState).child("schools").push(newStateItem);

        this.setState({
            usState: '',
            schoolName: '',
            imageUrlInput: '',
            imageUrls: []
        })

    }

    createStateOptions (states)
    {
        return states.map( (stateName, index) => (
            <option key={index} value={`${stateName}`}>{`${stateName}`}</option>
        ))
    }

    renderImages (imageArray)
    {
        return _.map(imageArray, (url, key) => {
            return (
                <ImageCard key={key} imgSrc={url} onClick={() => this.handleOnDeleteClick(url)}/>
            )
        })
    }

    handleAddButtonPress (newUrl)
    {
        if(newUrl)
        {
            let newImageArray = this.state.imageUrls;
            newImageArray.push(newUrl);
            this.setState({imageUrls: newImageArray, imageUrlInput:''})
        }
        else {
            //TODO: Take out the alert and change the color and of the input and add an error in the placeholder
            alert("Please add an image url in to the add image input\nExample input: http://imagename.jpg");
            return 0
        }


    }

    handleOnDeleteClick(imageUrl)
    {
        let indexToDelete = this.state.imageUrls.indexOf(imageUrl);
        let currentImageUrlsArray = this.state.imageUrls;
        let newArray = currentImageUrlsArray.filter( item => item !== this.state.imageUrls[indexToDelete]);
        this.setState({imageUrls: newArray});

    }


    render() {
        return (
            <div>
                <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="">What state?</label>
                        {/*<input*/}
                            {/*type="text"*/}
                            {/*name='State'*/}
                            {/*className="form-control no-border"*/}
                            {/*value={this.state.usState}*/}
                            {/*onChange={e => this.setState({usState: e.target.value})}*/}
                        {/*/>*/}
                        <select
                            name="state"
                            className="form-control"
                            onChange={e => this.setState({usState: e.target.value})}
                        >
                            {this.createStateOptions(states)}

                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">What is the school name? (Example: school name - city, state)</label>
                        <input
                            type="text"
                            name='schoolName'
                            className="form-control no-border"
                            value={this.state.schoolName}
                            onChange={e => this.setState({schoolName: e.target.value})}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add image urls. Example input: http://imagename.jpg</label>
                        <input
                            type="text"
                            name='imageURLs'
                            className="form-control no-border"
                            value={this.state.imageUrlInput}
                            onChange={e => this.setState({imageUrlInput: e.target.value})}
                        />
                        <button type="button" onClick={() => this.handleAddButtonPress(this.state.imageUrlInput)} className="btn btn-primary">Add New Images</button>
                    </div>
                    <h3>Image Preview</h3>
                    <div style={photoContainer}>
                        {this.renderImages(this.state.imageUrls)}
                    </div>

                    <div className="form-group">
                        <button onClick={(e) => this.handleSubmit(e)} className="btn btn-success col-sm-12">Save</button>
                    </div>

                </form>
            </div>
        );
    }
}

CreateStateForm.propTypes = {};
CreateStateForm.defaultProps = {};

export default CreateStateForm;

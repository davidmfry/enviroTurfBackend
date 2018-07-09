import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {database} from "../firebase";

class CreateNewsItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            headline: "",
            description: "",
            content: "",
            content: "",

        }
    }

    handleSubmit(e)
    {
        e.preventDefault()

        if (this.state.headline === '')
        {
            alert("Please add a headling");
            return 0
        }

        if (this.state.description === '')
        {
            alert("Please add a description");
            return 0
        }

        if (this.state.content === '')
        {
            alert("Please add some content");
            return 0
        }

        if (this.state.content === '')
        {
            alert("Please add a news item image url");
            return 0
        }


        const {headline, description, headerImage, content} = this.state
        let newsItem = {
            headline,
            description,
            content,
            headerImage,

        };
        console.log(newsItem)

        database.ref("newsitems").push(newsItem);

        this.setState({
            headline: "",
            lastName: "",
            description: "",
            content: "",
            headerImage: "",
        })
    }

    render() {
        return (
            <div>
                <h1>Create News Item</h1>
                <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label>Add News item image - Example input: http://imagename.jpg</label>
                        <input
                            type="text"
                            name='profileImage'
                            className="form-control no-border"
                            value={this.state.headerImage}
                            onChange={e => this.setState({headerImage: e.target.value})}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add the Headline</label>
                        <input
                            type="text"
                            name='profileImage'
                            className="form-control no-border"
                            value={this.state.headline}
                            onChange={e => this.setState({headline: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Add one line description for the news story </label>
                        <input
                            type="text"
                            name='firstName'
                            className="form-control no-border"
                            value={this.state.description}
                            onChange={e => this.setState({description: e.target.value})}
                        />

                    </div>

                    <div className="form-group">
                        <label htmlFor="">Enter Content</label>
                        <textarea
                            className="form-control"
                            rows="8"
                            value={this.state.content}
                            onChange={e => this.setState({content: e.target.value})}
                        ></textarea>

                    </div>

                    <div className="form-group">
                        <button onClick={(e) => this.handleSubmit(e)} className="btn btn-success col-sm-12">Save</button>
                    </div>

                </form>

            </div>
        );
    }
}

CreateNewsItem.propTypes = {};
CreateNewsItem.defaultProps = {};

export default CreateNewsItem;

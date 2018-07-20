import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {database} from "../firebase";

class EditNewsItem extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            headline: "",
            description: "",
            content: "",
            headerImage: "",
            id:'',

        }
    }

    componentDidMount()
    {

        const { id } = this.props.match.params
        this.setState({id});
        database.ref("newsitems").child(`${id}`).on('value', (snapshot) => {

            const {headline,
                description,
                content,
                headerImage} = snapshot.val()

            this.setState({
                headline,
                description,
                content,
                headerImage,
            })

        });
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


        database.ref("newsitems").child(`${this.state.id}`).update(newsItem);

        this.props.history.push('/newsitems');

    }

    render() {
        return (
            <div>
                <h1>Edit News Item</h1>
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
                        <button onClick={(e) => this.handleSubmit(e)} className="btn btn-success col-sm-12">Save Edits</button>
                    </div>

                </form>

            </div>
        );
    }
}

EditNewsItem.propTypes = {};
EditNewsItem.defaultProps = {};

export default EditNewsItem;

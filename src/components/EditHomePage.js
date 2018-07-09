import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash'

import ListItem from './ListItem';
import {database} from "../firebase";

const homePageItemId = "-LGwp2zviwPGVvEJLTAc";

class EditHomePage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            whoWeAre: '',
            whatWeProvideList: [],
            newWhatWeProvideItem: '',
            contactEmail: '',
            footerAddress: '',
            footerCity: '',
            footerState: '',
            footerZip: '',
            footerEmail: '',
            footerPhone: '',
            footerFax: '',
            twitterUrl: '',
            facebookUrl: '',
            instagramUrl: '',
            linkedinUrl: '',
            quickLinkUrl: '',
            quickLinkName: '',
            quickLinks: []

        }
    }

    componentDidMount()
    {
        database.ref("homepageitems").child(homePageItemId).on('value', (snapshot) => {
            const {whoWeAre, whatWeProvideList, contactEmail, footerAddress, footerCity, footerState, footerZip, footerEmail, footerPhone, footerFax, twitterUrl, facebookUrl, instagramUrl, linkedinUrl, quickLinks } = snapshot.val();
            this.setState({
                whoWeAre,
                whatWeProvideList,
                contactEmail,
                footerAddress,
                footerCity,
                footerState,
                footerZip,
                footerEmail,
                footerPhone,
                footerFax,
                twitterUrl,
                facebookUrl,
                instagramUrl,
                linkedinUrl,
                quickLinks
            })
        });
    }

    renderWhatWeProvideItems()
    {
        return _.map(this.state.whatWeProvideList, (item, index) => {
            return (
                <ListItem
                    key={index}
                    name={item}
                    onDeletePress={() => this.handleDeleteWhatWeProvideItem(item)}
                />
            )
        })
    }

    renderQuickLinks()
    {
        return _.map(this.state.quickLinks, (item, index) => {
            return (
                <ListItem
                    key={index}
                    name={item.name}
                    info={`| ${item.url}`}
                    onDeletePress={() => this.handleDeleteQuickItem(item)}
                />
            )
        })
    }
    //TODO: Make one function for each
    handleAddNewWhatWeProvideItem(item)
    {
        let newArray = this.state.whatWeProvideList.slice(0);
        newArray.push(item);
        this.setState({whatWeProvideList: newArray, newWhatWeProvideItem: '' })
    }
    handleDeleteWhatWeProvideItem(itemName)
    {
        let indexToDelete = this.state.whatWeProvideList.indexOf(itemName);
        let currentImageUrlsArray = this.state.whatWeProvideList.slice(0);
        let newArray = currentImageUrlsArray.filter( item => item !== this.state.whatWeProvideList[indexToDelete]);
        this.setState({whatWeProvideList: newArray});
    }

    handleAddNewQuickLink()
    {
        let newArray = this.state.quickLinks.slice(0);
        newArray.push({name: this.state.quickLinkName, url: this.state.quickLinkUrl});
        this.setState({quickLinks: newArray, quickLinkUrl: '', quickLinkName: '' })
    }
    handleDeleteQuickItem(itemName)
        {
        let indexToDelete = this.state.quickLinks.indexOf(itemName);
        let currentImageUrlsArray = this.state.quickLinks.slice(0);
        let newArray = currentImageUrlsArray.filter( item => item !== this.state.quickLinks[indexToDelete]);
        this.setState({quickLinks: newArray});
    }



    handleSubmit() {

        if (this.state.whoWeAre === '')
        {
            alert("Please add text to who we are.");
            return 0;
        }

        if (!this.state.whatWeProvideList)
        {
            alert("Please add an item to What We Provide")
            return 0;
        }

        if (this.state.footerAddress === '')
        {
            alert("Please add an address");
            return 0
        }

        if (this.state.footerCity === '')
        {
            alert("Please add a city");
            return 0
        }

        if (this.state.footerState === '')
        {
            alert("Please add a state");
            return 0
        }

        if (this.state.footerEmail === '')
        {
            alert("Please add an email");
            return 0
        }

        if (this.state.footerPhone === '')
        {
            alert("Please add a phone number");
            return 0
        }

        if (!this.state.quickLinks)
        {
            alert("Please add a quick link item");
            return 0
        }
        
        let homePageItem = {
            whoWeAre: this.state.whoWeAre,
            whatWeProvideList: this.state.whatWeProvideList,
            contactEmail: this.state.contactEmail,
            footerAddress: this.state.footerAddress,
            footerCity: this.state.footerCity,
            footerState: this.state.footerState,
            footerZip: this.state.footerZip,
            footerEmail: this.state.footerEmail,
            footerPhone: this.state.footerPhone,
            footerFax: this.state.footerFax,
            twitterUrl: this.state.twitterUrl,
            facebookUrl: this.state.facebookUrl,
            instagramUrl: this.state.instagramUrl,
            linkedinUrl: this.state.linkedinUrl,
            quickLinks: this.state.quickLinks,

        };


        database.ref("homepageitems").child(homePageItemId).update(homePageItem);
        this.props.history.push('/')
    }


    render() {
        return (
            <div>
                <h1>Edit Homepage</h1>
                <br/>
                <h3>Who We Are</h3>
                <div className="form-group">
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.whoWeAre}
                        onChange={e => this.setState({whoWeAre: e.target.value})}
                    />
                </div>
                <br/>
                <h3>What We Provide</h3>
                <br/>
                <input
                    type="text"
                    name='imageURLs'
                    className="form-control no-border"
                    placeholder={"add a new item to what we provide"}
                    value={this.state.newWhatWeProvideItem}
                    onChange={e => this.setState({newWhatWeProvideItem: e.target.value})}
                />
                <button style={{marginTop: "20px" ,marginBottom: "20px"}} type="button" onClick={() => this.handleAddNewWhatWeProvideItem(this.state.newWhatWeProvideItem)} className="btn btn-primary">Add new What we provide item.</button>

                {this.renderWhatWeProvideItems()}
                <br/>
                <h3>Contact Form Email Recipient</h3>
                <div className="form-group">
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.contactEmail}
                        onChange={e => this.setState({contactEmail: e.target.value})}
                    />
                </div>
                <br/>
                <h3>Footer Contact Text</h3>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.footerAddress}
                        onChange={e => this.setState({footerAddress: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.footerCity}
                        onChange={e => this.setState({footerCity: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.footerState}
                        onChange={e => this.setState({footerState: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Zip Code</label>
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.footerZip}
                        onChange={e => this.setState({footerZip: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.footerEmail}
                        onChange={e => this.setState({footerEmail: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.footerPhone}
                        onChange={e => this.setState({footerPhone: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Fax</label>
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.footerFax}
                        onChange={e => this.setState({footerFax: e.target.value})}
                    />
                </div>
                <br/>
                <h3>Social Media Links</h3>
                <div className="form-group">
                    <label>Twitter</label>
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.twitterUrl}
                        onChange={e => this.setState({twitterUrl: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Facebook</label>
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.facebookUrl}
                        onChange={e => this.setState({facebookUrl: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Instagram</label>
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.instagramUrl}
                        onChange={e => this.setState({instagramUrl: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>LinkedIn</label>
                    <input
                        type="text"
                        name='profileImage'
                        className="form-control no-border"
                        value={this.state.linkedinUrl}
                        onChange={e => this.setState({linkedinUrl: e.target.value})}
                    />
                </div>

                <h3>Quick Links</h3>
                <input
                    type="text"
                    name='imageURLs'
                    className="form-control no-border"
                    placeholder={"Add a new for the quick link."}
                    value={this.state.quickLinkName}
                    onChange={e => this.setState({quickLinkName: e.target.value})}
                />
                <br/>
                <input
                    type="text"
                    name='imageURLs'
                    className="form-control no-border"
                    placeholder={"Add a url for the new quick link."}
                    value={this.state.quickLinkUrl}
                    onChange={e => this.setState({quickLinkUrl: e.target.value})}
                />
                <button style={{marginTop: "20px" ,marginBottom: "20px"}} type="button" onClick={() => this.handleAddNewQuickLink(this.state.quickLinkUrl)} className="btn btn-primary">Add new quick link.</button>
                <br/>
                {this.renderQuickLinks()}
                <br/>
                <br/>
                <div className="form-group">
                    <button onClick={() => this.handleSubmit()} className="btn btn-success col-sm-12">Save</button>
                </div>
            </div>
        );
    }
}

EditHomePage.propTypes = {};
EditHomePage.defaultProps = {};

export default EditHomePage;

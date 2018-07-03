
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TeamMember from './TeamMember/TeamMember';
import {database} from "../firebase";

class CreateTeamMember extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            bio: "",
            profileImage: "",
            linkedInUrl: "",

        }
    }

    handleSubmit(e)
    {
        e.preventDefault()

        if (this.state.firstName === '' || this.state.lastName === '')
        {
            alert("Please add a first and last name");
            return 0
        }

        if (this.state.phoneNumber === '')
        {
            alert("Please add a Phone");
            return 0
        }

        if (this.state.bio === '')
        {
            alert("Please add a bio");
            return 0
        }

        if (this.state.profileImage === '')
        {
            alert("Please add a profile image url");
            return 0
        }

        let teamMemberItem = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            bio: this.state.bio,
            profileImage: this.state.profileImage,
            linkedInUrl: this.state.linkedInUrl,

        }

        database.ref("teammembers").push(teamMemberItem);

        this.setState({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            bio: "",
            profileImage: "",
            linkedInUrl: "",
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="form-group">
                                <label>Add image urls. Example input: http://imagename.jpg</label>
                                <input
                                    type="text"
                                    name='profileImage'
                                    className="form-control no-border"
                                    value={this.state.profileImage}
                                    onChange={e => this.setState({profileImage: e.target.value})}
                                />
                            </div>

                            <div className="form-group">
                                <label>Enter LinkedIn Url</label>
                                <input
                                    type="text"
                                    name='profileImage'
                                    className="form-control no-border"
                                    value={this.state.linkedInUrl}
                                    onChange={e => this.setState({linkedInUrl: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Enter First Name</label>
                                <input
                                    type="text"
                                    name='firstName'
                                    className="form-control no-border"
                                    value={this.state.firstName}
                                    onChange={e => this.setState({firstName: e.target.value})}
                                />

                            </div>

                            <div className="form-group">
                                <label htmlFor="">Enter Last Name</label>
                                <input
                                    type="text"
                                    name='lastName'
                                    className="form-control no-border"
                                    value={this.state.lastName}
                                    onChange={e => this.setState({lastName: e.target.value})}
                                />

                            </div>

                            <div className="form-group">
                                <label htmlFor="">Enter phone number</label>
                                <input
                                    type="text"
                                    name='phoneNumber'
                                    className="form-control no-border"
                                    value={this.state.phoneNumber}
                                    onChange={e => this.setState({phoneNumber: e.target.value})}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Enter Team Members Bio</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={this.state.bio}
                                    onChange={e => this.setState({bio: e.target.value})}
                                ></textarea>

                            </div>

                            <div className="form-group">
                                <button onClick={(e) => this.handleSubmit(e)} className="btn btn-success col-sm-12">Save</button>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-6">
                        <TeamMember className="team-member-item1" linkedin={this.state.linkedInUrl} image={this.state.profileImage} name={`${this.state.firstName} ${this.state.lastName}`} phoneNumber={this.state.phoneNumber} bio={this.state.bio}/>
                    </div>
                </div>

            </div>
        );
    }
}

CreateTeamMember.propTypes = {};
CreateTeamMember.defaultProps = {};

export default CreateTeamMember;

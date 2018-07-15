import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {auth} from "../firebase";


class SignUp extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            username: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            error: null,
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const {
            username,
            email,
            passwordOne,
        } = this.state;

        auth.createUserWithEmailAndPassword(email, passwordOne)
            .catch((error) => console.error(error))

        this.setState({
            username: '',
            email: '',
            password: '',
            passwordTwo: ''
        })


    }



    render() {

        const isInvalid = this.state.passwordOne !== this.state.passwordTwo ||
            this.state.passwordOne === '' ||
            this.state.email === '';

        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Create an account</h1>
                <br/>
                <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            name='email'
                            className="form-control no-border"
                            placeholder="Enter your email"
                            value={this.state.email}
                            onChange={e => this.setState({email: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name='passwordOne'
                            className="form-control no-border"
                            placeholder="Enter a password"
                            value={this.state.passwordOne}
                            onChange={e => this.setState({password: e.target.value})}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name='passwordTwo'
                            className="form-control no-border"
                            placeholder="Confirm password"
                            value={this.state.passwordTwo}
                            onChange={e => this.setState({passwordTwo: e.target.value})}
                        />

                    </div>

                    <div className="form-group">
                        <button disabled={isInvalid} onClick={(e) => this.handleOnSubmit(e)} className="btn btn-success col-sm-12">Sign Up</button>
                    </div>

                </form>
                {this.state.error && <p>{this.state.error.message}</p>}
            </div>
        );
    }
}

SignUp.propTypes = {};
SignUp.defaultProps = {};

export default SignUp;

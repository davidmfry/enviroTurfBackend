import React, {Component} from 'react';
import {auth} from "../firebase";
import PropTypes from 'prop-types';


const center = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

class Login extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: null,
        }
    }

    handleOnSubmit (e)
    {
        e.preventDefault();

        const {
            email,
            password,
            error,
        } = this.state;

        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => console.error(error));

        this.props.history.push('/dashboard');
    }

    render() {
        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <div className="jumbotron">
                <h1 className="display-4">Sign in</h1>
                <p className="lead">Welcome to the Enviroturf Web Backend</p>
                <hr className="my-4"/>
                <br/>
                <form action="">
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
                            value={this.state.password}
                            onChange={e => this.setState({password: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <button disabled={isInvalid} onClick={(e) => this.handleOnSubmit(e)} className="btn btn-success col-sm-12">Login</button>
                    </div>

                    { error && <p>{error.message}</p> }

                </form>
            </div>


        );
    }
}

Login.propTypes = {};
Login.defaultProps = {};

export default Login;

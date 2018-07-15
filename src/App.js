import React, { Component } from 'react';
import {auth} from './firebase';

import Navigation from './components/Navigation';

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            authUser: null,
        }
    }

    componentDidMount()
    {
        auth.onAuthStateChanged(authUser => {
            authUser ? this.setState({authUser}) : this.setState({authUser: null});
        })
    }

    render() {
    return (
      <div className="container-fluid">
          <Navigation authUser={this.state.authUser}/>
      </div>
    );
    }
}

export default App;

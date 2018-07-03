import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Sandbox extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            order: [<One/>,
                <Three/>,
                <Two/>,
            <Four/>,]
        }
    }
    render() {
        return (
            <div>
                <h1>Sandbox</h1>
                {this.state.order.map( (comp) => comp)}
            </div>
        );
    }
}

Sandbox.propTypes = {};
Sandbox.defaultProps = {};


class One extends Component{
    render()
    {
        return (
            <div>
                <h1>One</h1>
            </div>
        )
    }
}

class Two extends Component{
    render()
    {
        return (
            <div>
                <h1>Two</h1>
            </div>
        )
    }
}


class Three extends Component{
    render()
    {
        return (
            <div>
                <h1>Three</h1>
            </div>
        )
    }
}

class Four extends Component{
    render()
    {
        return (
            <div>
                <h1>Four</h1>
            </div>
        )
    }
}



export default Sandbox;

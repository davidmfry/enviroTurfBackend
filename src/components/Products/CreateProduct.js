import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import {database} from "../../firebase";

class CreateProduct extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            title: "",
            description: "",
            titleColor: ""
        }
    }

    handleSubmit(e)
    {
        e.preventDefault()

        if (this.state.title === '')
        {
            alert("Please add a title");
            return 0
        }

        if (this.state.description === '')
        {
            alert("Please enter a description");
            return 0
        }

        let productItem = {
            title: this.state.title,
            description: this.state.description,
            titleColor: this.state.titleColor,


        }

        database.ref("products").push(productItem);

        this.setState({
            title: "",
            description: "",
            titleColor: "",

        })
    }

    render()
    {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="">Enter Product Name</label>
                                <input
                                    type="text"
                                    name='title'
                                    className="form-control no-border"
                                    value={this.state.title}
                                    onChange={e => this.setState({title: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Enter Product Title Color (<a href="https://htmlcolorcodes.com/" target="_blank">Pick a color from here</a>) use the color that looks like this: "#0000" called HEX</label>
                                <input
                                    type="text"
                                    name='title'
                                    className="form-control no-border"
                                    value={this.state.titleColor}
                                    onChange={e => this.setState({titleColor: e.target.value})}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Enter Product Description</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={this.state.description}
                                    onChange={e => this.setState({description: e.target.value})}
                                ></textarea>

                            </div>

                            <div className="form-group">
                                <button onClick={(e) => this.handleSubmit(e)} className="btn btn-success col-sm-12">Save</button>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-6">
                        <ProductCard title={this.state.title} color={this.state.titleColor} description={this.state.description}/>
                    </div>

                </div>
            </div>
        );
    }
}

CreateProduct.propTypes = {};
CreateProduct.defaultProps = {};

export default CreateProduct;

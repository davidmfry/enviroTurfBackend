import React, {Component} from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { database } from "../../firebase";

import ListItem from '../ListItem';

class Products extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            products: ''
        }
    }


    componentDidMount()
    {
        database.ref("products").on('value', (snapshot) => {
            this.setState({products: snapshot.val()})
        });
    }

    renderProduct()
    {
        return _.map(this.state.products, (product, key) => {
            return (
                <ListItem
                    key={key}
                    name={`${product.title}`}
                    hasEditButton={true}
                    onEditPress={() => this.handleOnEditPress(key)}
                    onDeletePress={() => this.handleOnDeletePress(key)} />

            )
        })
    }

    handleOnEditPress(id)
    {
        this.props.history.push(`/edit/product/${id}`)
    }

    handleOnDeletePress(id)
    {
        database.ref('products').child(id).remove();
    }

    render() {

        return (
            <div>
                <h1>Products</h1>
                <ul className="list-group">
                    {this.renderProduct()}
                </ul>

            </div>
        );
    }
}

Products.propTypes = {};
Products.defaultProps = {};

export default Products;

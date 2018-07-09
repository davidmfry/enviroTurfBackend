import React, {Component} from 'react';
import './productcard.css';
const ProductCard = (props) => (
    <div className="product-card-container">
        {/*<img src={props.image} alt=""/>*/}
        <h1><strong style={{color: props.color}}>{props.title}</strong></h1>
        <p>{props.description}</p>
    </div>
)

export default ProductCard
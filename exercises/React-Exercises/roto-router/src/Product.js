import React from 'react';
import products from "./products.json"

const Product = (props) => {
    let {id} = props.match.params;
    let item = products.find(product => {
        return product._id === id
    })
    console.log(item)
    let {name, price, description} = item;
    return (
        <div className="product">
            <h1>{name}</h1>
            <h3>Price: {price}</h3>
            <h3>{description}</h3>
        </div>
    );
};

export default Product;
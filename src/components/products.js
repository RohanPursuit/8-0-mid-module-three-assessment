import React from "react";
import formatPrice from "../helpers/formatPrice";
import products from '../data/productData'

export default class Products extends React.Component {

    
    render () {
        function getProducts() {
            return products.map(({id, name, price, description, img}) => <div key={id}><h2>{name}</h2><p>Price: {formatPrice(price)}</p><button type="submit">Add To Card </button><img src={img} alt="" /><p>{description}</p></div>)
        }
        return getProducts()
    }
}
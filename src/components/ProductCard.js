import formatPrice from '../helpers/formatPrice'
import React from 'react'

export default class ProductCard extends React.Component {
    render(){
        const {name, price, img, description, addToCart} = this.props
        return(
            <div>
            <h2>{name} </h2>
            <p> Price: {formatPrice(price)} </p>
            <button 
            onClick={()=> addToCart(name, price)} 
            type='submit'
            >
                Add To Cart
            </button>
            <img src={img} alt="" />
            <p>{description}</p>
            </div>
            )
        }
    }

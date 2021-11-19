import formatPrice from '../helpers/formatPrice'
import React from 'react'

export default class ProductCard extends React.Component {
    render(){
        const {id, name, price, img, description, addToCart} = this.props
        const formatted = formatPrice(price)
        return(
            <div>
            <h2>{name} </h2>
            <p> Price: {formatted} </p>
            <img src={img} alt="" />
            <button 
            onClick={()=> addToCart(id, name, price, img, description)} 
            type='submit'
            >
                Add To Cart
            </button>
            <p>{description}</p>
            </div>
            )
        }
    }

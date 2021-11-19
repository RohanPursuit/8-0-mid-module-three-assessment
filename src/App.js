import "./App.css";
import React from 'react'
import data from './data/productData'
import formatPrice from './helpers/formatPrice'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      products: data,
      selectedProduct: ''
    }
  }

  addToCart = (event) => {
    console.log(event.target)
    this.setState({selectedProduct: event.target})
  }

  render(){
    const displayProducts = () => {
      return this.state.products.map(({id, name, price, description, img})=> 
      <form>
        <h2>{name} </h2>
        <p> Price: {formatPrice(price)} </p>
        <img src={img} alt="" />
        <button type='submit'>Add To Cart</button>
        <p>{description}</p>
      </form>)
    }
    return (
      <div className="App">
        <h1>My Garage Sale</h1>
        <section className="products">
          {displayProducts()}
        </section>
        <section className="Cart">
        </section>
      </div>
    )
  }
};

export default App;

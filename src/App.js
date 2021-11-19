import "./App.css";
import React from 'react'
import data from './data/productData'
import ProductCard from './components/ProductCard'
import formatPrice from './helpers/formatPrice'
import Form from './components/Form'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      products: data,
      displayProducts: [],
      selectedProduct: '',
      cart: [],
      total: [0]
    }
  }

  addToCart = (name, price) => {
    const format = 'XXXXXXX'
    const uuid = format.split('').map(() => Math.floor(Math.random()* 10)).join('')
    const {cart, total} = this.state
    this.setState({cart: [...cart, <li key={uuid}>{name + ':'} {formatPrice(price)}</li>], total: [...total, price]})
  }

  render(){
    const displayProducts = this.state.products.map(({id, name, price, description, img})=> 
      <ProductCard key={id}
      addToCart={this.addToCart}
      id={id}
      name={name}
      price={price}
      img={img}
      description={description}
      />
      )

      const subTotal = this.state.total.reduce((a,b) => a + b) || 0

      const tax = subTotal*0.05
      const total = subTotal + tax

    return (
      <div className="App">
        <section className="products">
        <h1>My Garage Sale</h1>
          {displayProducts}
        </section>
        <section className="Cart">
          <h2>Cart</h2>
          {this.state.cart}
          <h3>
            <p>Subtotal: {formatPrice(Number(subTotal))}</p>
            <p>Tax: {formatPrice(subTotal*0.05)}</p>
            <p>Total: {formatPrice(total)}</p>
            </h3>
        <section className="checkout">
          <h2>Checkout</h2>
          <Form total={total}/>
        </section>
        </section>
      </div>
    )
  }
};

export default App;

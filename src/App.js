import "./App.css";
import React from 'react'
import Products from './components/products'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      cart: []
    }
  }
  

  render(){
    return (
      <div className="App">
        <section className="products">
        <Products />
        </section>
      </div>
    )
  }
};

export default App;

import "./App.css";
import React from 'react'
import Products from './components/products'

class App extends React.Component {
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

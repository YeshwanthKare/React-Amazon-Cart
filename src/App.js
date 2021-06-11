import React, { useState } from "react"
// import logo from './logo.svg';
import Header from "./components/Header"
import CartItems from "./components/CartItems"
import './App.css';
import CartTotal from "./components/CartTotal";
import data from "./Data"

function App() {
  const [ cartItems, setCartItems ] = useState(data) 
  return (
    <div className="App">
        <Header title="Amazon Cart"/>
        <div className="App-main">
          <CartItems cartItems={cartItems}/>
          <CartTotal cartItems={cartItems}/>
        </div>
    </div>
  )
  
}

export default App;

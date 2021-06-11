import React from "react"
// import logo from './logo.svg';
import Header from "./components/Header"
import CartItems from "./components/CartItems"
import './App.css';
import CartTotal from "./components/CartTotal";

function App() {

  return (
    <div className="App">
        <Header title="Amazon Cart"/>
        <div className="App-main">
          <CartItems />
          <CartTotal />
        </div>
    </div>
  )
  
}

export default App;

import React, { useState } from 'react'
import CartItem from './CartItem'
import "./CartItems.css"

function CartItems({ cartItems, setCartItems }) {
	
    const changeItemQuantity = (e, index) => {
	console.log(e.target.value, index)
	let newCartItems = [...cartItems];
	newCartItems[index].quantity = e.target.value
	setCartItems(newCartItems)	
    }

    const deleteItem = (indexToDelete) => {
	const newItems = cartItems.filter((value, index) => {
            return index !== indexToDelete
	})
	setCartItems(newItems)	  
    }
    return (
	<div className="cartItems">
	    <h1>Shopping Cart</h1>
	    <hr />
	    <div className="CartItems-items">
		{
		    cartItems.map((item, index) => {
	    		return <CartItem 
			    item={item} 
			    key={index} 
			    index={index} 
			    changeItemQuantity={changeItemQuantity} 
			    deleteItem={deleteItem} />
		    })
		}
	    </div>
	</div>
    )
}

export default CartItems

import React, { useState } from 'react'
import CartItem from './CartItem'
import "./CartItems.css"

function CartItems({ cartItems }) {	
    return (
	<div className="cartItems">
	    <h1>Shopping Cart</h1>
	    <hr />
	    <div className="CartItems-items">
		{
		    cartItems.map((item, index) => {
	    		return <CartItem item={item} key={index} index={index} />
		    })
		}
	    </div>
	</div>
    )
}

export default CartItems

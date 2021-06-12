import React from 'react'
import "./CartTotal.css"
import NumberFormat from 'react-number-format';

function CartTotal({ cartItems }) {
	
    const getTotalPrice = () => {
	let totalPrice = 0;
	cartItems.forEach(item => {
	    totalPrice +=  (item.price * item.quantity)	
	})
	return totalPrice
    }	

    const getItemNumber = () => {
	    let nums = 0;
	    cartItems.forEach(item => {
		nums += parseInt(item.quantity)   
	    })
	    return nums
    }

    return (
	<div className="cartTotal">
	    <h3>Subtotal ({getItemNumber()} items):
		<span className="CartTotal-price">
		    <NumberFormat value={getTotalPrice()} decimalScale={2} displayType={'text'} thousandSeparator={true} prefix={'$'} />	
		</span>    
            </h3>
	    <button>Proceed to Checkout</button>		
	</div>
    )
}

export default CartTotal

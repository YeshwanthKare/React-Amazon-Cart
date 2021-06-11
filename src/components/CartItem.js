import React from 'react'
import "./CartItem.css"

function CartItem() {
    return (
	<div className="CartItem">
	    <div className="CartItem-image">
		<img src="https://images-na.ssl-images-amazon.com/images/I/81gd3uyxc3L._AC_SL1500_.jpg" alt="Item"/>    
            </div>
	    <div className="CartItem-info">
		<div className="info-title">
		    <h2>Apple Ipad</h2>
		</div>
		<div className="info-stock">In Stock</div>
		<div className="item-actions">
		    <div className="item-quantity">
			<select value="">
			    <option value="1">Qty: 1</option>	
			    <option value="2">Qty: 2</option>	
			    <option value="3">Qty: 3</option>	
			</select>    
		    </div>
		    <div className="items-line">|</div>
		    <div className="item-delete">Delete</div>	
		</div>
	    </div>	
	    <div className="CartItem-price">
		$<span className="item-price">769.00</span>	
	    </div>
	    
	</div>
    )
}

export default CartItem

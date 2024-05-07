import React, { useContext, useEffect } from "react";
import './PlaceOrder.css'
import CartContext from "../context/cartContext";
import { useNavigate } from "react-router-dom";
const PlaceOrder=()=>{
    let { cartItems } = useContext(CartContext);
    const navigate=useNavigate();

return(


    <form className="place-order">
     <div className="place-order-left">
       <p className="title">Delivery Information</p>
<div className="multi-fields">
 <input type="text" placeholder="First Name"/>
 <input type="text" placeholder="Last Name"/>
</div>

<input type="email" placeholder="Email Address"/>
<input type="text" placeholder="Street"/>

<div className="multi-fields">
 <input type="text" placeholder="City"/>
 <input type="text" placeholder="State"/>
</div>
<div className="multi-fields">
 <input type="text" placeholder="Zip Code"/>
 <input type="text" placeholder="Country"/>
</div>
<input type="text" placeholder="Phone"/>


     </div>
     <div className="place-order-right">
     <div className="cart-summary">
                    <h3 className="cart-summary-title">Total Price </h3>
                    <span className="total-price-cart">${cartItems.reduce((acc, cur) => acc + cur.newPrice * cur.quantity, 0)}</span>
                    <button>Proceed to Payment</button>
                </div>

    </div>
    </form>
)
}
export default PlaceOrder
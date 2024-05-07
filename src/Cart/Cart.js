import React, { useContext} from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import './Cart.css';
import CartContext from "../context/cartContext";
import { useNavigate } from "react-router-dom";

//import data from "../DataBase/data";
const Cart = () => {
    let { cartItems,addToCart,removeFromCart } = useContext(CartContext);
    console.log(cartItems);
    console.log(cartItems.length);
    const navigate=useNavigate();
    return (
        <div className="cart">
            <div className="cart-title">Your Shopping Cart</div>
            <div className="cart-wrapper">
                <div className="cart-items">
                    {cartItems.map((item) =>
                        <div key={item.id} className="cart-item">
                            <img src={item.img} className="cart-item-img" alt={item.title} />
                            <div className="cart-info">
                                <div>
                                    <div className="cart-info-title">
                                        <b>Title</b>  {item.title}
                                    </div>
                                    <div className="cart-info-price">
                                        <b>price</b>  {item.newPrice}
                                    </div>

                                </div>
                                <div className="cart-quantity">
                                    <button onClick={()=>addToCart({...item,quantity:item.quantity+1})}><FaPlus /></button>
                                    <b>{item.quantity}</b>
                                    <button><FiMinus  onClick={()=>addToCart({...item,quantity:item.quantity-1})}/></button>
                                    <div className="cart-price">${item.newPrice * item.quantity}EGP</div>
                                    <MdDelete className="trash-icon" onClick={()=>removeFromCart(item.id)} />
                                </div>

                            </div>


                        </div>

                    )
                    }
                </div>
                <div className="cart-summary">
                    <h3 className="cart-summary-title">Total Price </h3>
                    <span className="total-price-cart">${cartItems.reduce((acc, cur) => acc + cur.newPrice * cur.quantity+(acc + cur.newPrice * cur.quantity*0.1), 0)}</span>
                    <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
                </div>
            </div>

        </div>
    )
}
export default Cart;
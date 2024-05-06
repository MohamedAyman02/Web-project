import { useState , useEffect } from "react";
import CartContext from "./cartContext";
const CartProvider=({children})=>{
    let [cartItems,setCartItems]=useState([]);
    //Add to cart
    const addToCart=(item)=>{
        const isexist=cartItems.find(cart=>cart.id===item.id);
        if(isexist)
        {
            setCartItems(
                cartItems.map(c=>c.id===item.id?item:c)
            )
        }
        else{
            setCartItems(prev=>[...prev,item]);
        }
    }
    //Remove from cart
    const removeFromCart=(id)=>{
        const cart=cartItems.filter(c=>c.id!==id);
        setCartItems(cart);
    }
   
    useEffect(() => {
            console.log(cartItems);
        }, [cartItems]);
    //Get total
   
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,cartItemsLength:cartItems.length}}>
            {children}
        </CartContext.Provider>
    );
    
}
export default CartProvider;
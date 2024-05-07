// import { createContext } from "react";
// const CartContext=createContext({});
// export default CartContext;
import { createContext } from "react";

const CartContext = createContext({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    cartItemsLength: 0,
});

export default CartContext;

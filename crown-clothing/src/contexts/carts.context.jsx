import { useEffect } from "react";
import { createContext,useState } from "react";

const addCartItem = (cartItems,productToAdd)=>{
    const existingCartItem = cartItems.find((cartItem)=> cartItem.id === productToAdd.id)
    if(existingCartItem){
        return cartItems.map((cartItem)=> cartItem.id===productToAdd.id ? {...cartItem, quantity:cartItem.quantity+1 } : cartItem)
    }
    return [...cartItems,{ ...productToAdd,quantity:1 }];
}

const removeItem = (cartItems,productToRemove,price,setPrice)=>{
    const existingProduct = cartItems.find((cartItem)=>{
        return cartItem.id === productToRemove.id
    })

    if(existingProduct.quantity===1){
        return cartItems.filter((cartItem)=>{
            return cartItem.id !== productToRemove.id
        })
    }

    return cartItems.map((cartItem)=> cartItem.id===productToRemove.id ? {...cartItem, quantity:cartItem.quantity-1 } : cartItem)

}

const clearCartItem = (cartItems,cartItemToClear)=>{
    return cartItems.filter(cartItem => cartItem.id!==cartItemToClear.id)
}

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: () => {},
    cartItems:[],
    addItemToCart: ()=>{},
    cartItemCount:0,
    removeItem: ()=>{},
    clearItemFromCart:()=>{},
    cartItemTotal:0
})

export const CartProvider = ({ children })=>{

    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems,setCartItem] = useState([])
    const [cartItemCount,setCartItemCount] = useState(0);
    const [cartItemTotal,setCartItemTotal] = useState(0);

    useEffect(()=>{
        const newCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCartItemCount(newCount)
    },[cartItems])

    useEffect(()=>{
        const newTotal = cartItems.reduce((total,cartItem)=>total+(cartItem.price*cartItem.quantity),0)
        setCartItemTotal(newTotal)
    },[cartItems])

    const addItemToCart = (productToAdd)=>{
        setCartItem(addCartItem(cartItems,productToAdd));
    }

    const removeToCartItem = (productToRemove)=>{
        setCartItem(removeItem(cartItems,productToRemove))
    }

    const clearItemFromCart = (cartItemClear) =>{
        setCartItem(clearCartItem(cartItems,cartItemClear))
    }
    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartItemCount,removeToCartItem,clearItemFromCart,cartItemTotal}; 

    return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
}

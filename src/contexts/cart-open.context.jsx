import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({   
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    products: [],
});

export const CartProvider = ({children}) => {
    const [isCartOpen,setCartOpen] = useState(null);
    const value = { isCartOpen,setCartOpen};

    


    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
import React, { createContext, useState } from 'react'

export type CartType = {
    category:string;
    productId: number;
    quantity: number;
    image:string;
    price:number;
    title:string;
    maxQuantityExceeded:boolean;
  }

type ChildrenPropType={
    children?:React.ReactNode;
}

type CartContextType={
    cartItems:CartType[] |null;
    setCartItems:React.Dispatch<React.SetStateAction<CartType[] | null>>
}

export const CartContext= createContext({} as CartContextType)

export const CartContextProvider= ({children} : ChildrenPropType) => {
    const [cartItems, setCartItems] = useState<CartType[] | null>([])
  return (
    <div>
      <CartContext.Provider value={{cartItems, setCartItems}}>
        {children}
      </CartContext.Provider>
    </div>
  )
}


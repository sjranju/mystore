import React, { useState, createContext } from 'react'

type ChildrenPropType = {
    children?: React.ReactNode;
}

type CartQuantityType = {
    cartQuantity: number | null;
    setCartQuantity: React.Dispatch<React.SetStateAction<number | null>>;
}

export const CartQuantityContext = createContext({} as CartQuantityType)

export const CartQuantityProvider = ({ children }: ChildrenPropType) => {

    const [cartQuantity, setCartQuantity] = useState<number | null>(0)

    return (
        <div>
            <CartQuantityContext.Provider value={{ cartQuantity, setCartQuantity }}>
                {children}
            </CartQuantityContext.Provider>
        </div>
    )
}


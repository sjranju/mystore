import React, { createContext, useState } from 'react'

type ChildrenPropType={
    children?:React.ReactNode;
}

type PriceType = {
    id:number;
    actualPrice:number;
    discountPrice:number;
    discountPercent:number;
}

type PriceContextType={
    priceDetails : PriceType[] | null;
    setPriceDetails : React.Dispatch<React.SetStateAction<PriceType[] | null>>;
}

export const PriceContext = createContext({} as PriceContextType)

export const PriceDetailsProvider = ({children}:ChildrenPropType) => {
    const [priceDetails,setPriceDetails] = useState<PriceType[] | null>([])
  return (
    <div>
      <PriceContext.Provider value={{priceDetails,setPriceDetails}}>
        {children}
      </PriceContext.Provider>
    </div>
  )
}


import React from 'react'

type pricePropsType ={
    price:number;
}

const ComputeProductPrice = (props:pricePropsType) => {
    const price=props.price
    return (
        <>
            <p className='discountPrice'>&nbsp;₹{Math.floor(price * 18)} </p>
            <p className='actualPrice'>₹{Math.floor(price * 30)}</p>
            <p className='discountPercent'>{Math.floor((((price * 30) - (price * 18)) / (price * 30)) * 100)}% OFF</p>
        </>
    )
}

export default ComputeProductPrice

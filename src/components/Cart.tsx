import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ComputeProductPrice from './ComputeProductPrice';
import './navbar.css'
import cloneDeep from 'lodash.clonedeep'
import shoppingcartmd from '../images/shoppingcartmd.jpg'
import { AiOutlineClose } from "react-icons/ai"


const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext)
  let cartItemsClone = cloneDeep(cartItems)
  let totalPrice = Math.floor(cartItems?.reduce((price, cartItem) => price + (cartItem.price * cartItem.quantity * 30), 0)! ?? 0);
  let discountPrice = Math.floor(cartItems?.reduce((price, cartItem) => price + (cartItem.price * cartItem.quantity * 18), 0)! ?? 0);
  let discount = totalPrice - discountPrice;

  const handleQuantity = (productId: number, selectedCartQuantity: number) => {
    // let cartItemsClone = cloneDeep(cartItems)
    let FoundCartItem = cartItemsClone?.find((cartItem) => cartItem.productId === productId)
    if (FoundCartItem !== null)
      cartItemsClone!.find((cartItem) => cartItem.productId === productId)!.quantity = selectedCartQuantity

    if (FoundCartItem!.quantity <= 3) {
      cartItemsClone!.find((cartItem) => cartItem.productId === productId)!.maxQuantityExceeded = false
    }
    setCartItems(cartItemsClone)
  }

  const handleRemoveItem = (productId: number) => {
    let foundCartItem = cartItemsClone?.find(cartItem => cartItem.productId === productId)
    cartItemsClone?.splice(cartItemsClone!.indexOf(foundCartItem!), 1)
    setCartItems(cartItemsClone)
  }

  if (cartItems?.length === 0 || cartItems?.length === null)
    return (
      <div className='emptyCart'>
        <img src={shoppingcartmd} alt='empty cart'></img>
        <h1>Hey, it feels so light!</h1>
        <p>There is nothing in your bag. Let's add some items.</p>
      </div>)


  return (
    <div className='displayCart'>
      <div className='productDisplay'>
        {
          cartItems?.map((cartItem) =>
            <div key={cartItem.productId} className='cartItem'>

              <Link className='cartImages' to={`/productdetails/${cartItem.productId}`}>
                <img src={cartItem.image} alt="cart" />
              </Link>
              <div className='cartDetails'>
                <p id='cartTitle'>{cartItem.title}</p>
                {/* <p id='cartQuantity1'>Quantity - {cartItem.quantity}</p> */}
                <label>Quantity : </label>
                <select value={cartItem.quantity}
                  onChange={(e) => { handleQuantity(cartItem.productId, parseInt(e.target.value)) }}>

                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
                <div className='productPrice'>
                  {

                  }
                  <ComputeProductPrice price={cartItem.price * cartItem.quantity} />
                </div>
              </div>
              <div onClick={() => handleRemoveItem(cartItem.productId)} id='removeCartItem'>
                <AiOutlineClose />
              </div>
            </div>

          )
        }

      </div>

      <div className='totalPrice'>
        <div id='priceContainer'>
          <p id='totalPriceDetails'>PRICE DETAILS <span className='totalItems'>({cartItems?.length} items)</span></p>
          <p className='cartPriceLeftAlign'>TOTAL MRP<span className='cartPriceRightAlign'> ₹{totalPrice}</span></p>
          <p className='cartPriceLeftAlign'>Discount on MRP <span className='cartPriceDiscount'>-₹{discount}</span></p>
          <p className='totalCartPrice'>Total Amount <span className='cartPriceRightAlign'>₹{discountPrice}</span></p>
        </div>
        <div><button id='placeOrder'>PLACE ORDER</button></div>
      </div>
    </div >

  )
}

export default Cart

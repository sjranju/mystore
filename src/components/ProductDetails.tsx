import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';
import ComputeProductPrice from './ComputeProductPrice';
import cloneDeep from 'lodash.clonedeep'
import toast from "react-hot-toast";
import { AiFillStar } from "react-icons/ai"
// import { PriceContext } from './PriceDetails';


type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: {
    rate: number,
    count: number
  }

}

const ProductDetails = () => {
  const [product, setProduct] = useState<ProductType | undefined>()
  const { cartItems, setCartItems } = useContext(CartContext)
  // const {priceDetails,setPriceDetails} = useContext(PriceContext)

  const { id } = useParams()

  // console.log(`My ID is ${id}`);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (res.ok) { return res.json(); }
        else { console.log("response error"); }
      })
      .then((data) => {
        // console.log('my data is');
        // console.log(data);
        return setProduct(data)
      })

      .catch(error => console.log(error))

  }, [id])


  const increamentProductQuantityInCart = (category: string, productId: number, image: string, price: number, title: string) => {
    console.log(cartItems);
    //const productImg = image

    let cartItemsClone = cloneDeep(cartItems)
    // console.log('increamentProductQuantityInCart');
    let FoundCartItem = cartItemsClone?.find((cartItem) => cartItem.productId === productId)

    console.log({ FoundCartItem });
    if (FoundCartItem) {
      if (FoundCartItem.quantity > 2) {
        cartItemsClone!.find(cartItem => cartItem.productId === productId)!.maxQuantityExceeded = true
        setCartItems(cartItemsClone)
        console.log('maxQuantityExceededtrue');
      }

      else {
        cartItemsClone!.find((cartItem) => cartItem!.productId === productId)!.quantity++;
        console.log('maxQuantityExceededfalse');
        console.log({ cartItemsClone });
        cartItemsClone!.find((cartItem) => cartItem!.productId === productId)!.maxQuantityExceeded = false
        setCartItems(cartItemsClone)
        // setCartQuantity(prevQty=>prevQty!+1);
        toast.custom(() => (
          <div className='toast-message'>
            <p>You have this item in your bag and we have increased the quantity by 1</p>
          </div>
        ))
      }
    }

    else {
      // console.log('Push');
      cartItemsClone?.push({ category, productId, quantity: 1, image, price, title, maxQuantityExceeded: false })
      console.log(cartItems);
      setCartItems(cartItemsClone);

      toast.custom(() => (
        <div className='toast-message'>
          <img src={image} alt='productImage' />
          <p>Added to bag!</p>
        </div>
      ))

    }
    // toast('Added to bag!',{
    //   icon:`${productImg}`,
    //   style: {
    //     backgroundColor: "#323131",
    //     color: "#ffffff",
    //     marginTop:70,
    //   },

    // }
    // ) 


  }

  // let foundCartItem = updatedCartItems.find((cartItem) => {cartItem?.productId} === productId)
  // if (foundCartItem) {
  //   foundCartItem.quantity++
  // }
  // else {
  //   updatedCartItems.push({ productId, quantity: 1 })
  // }
  // cartContext.setCartItems(updatedCartItems)
  // const computePrice = (productPrice:number) => {
  //   return(
  //   <div>
  //     <p className='discountPrice'>₹ {Math.floor(productPrice * 18)} </p>
  //     <p className='actualPrice'>₹{Math.floor(productPrice * 30)}</p>
  //     <p className='discountPercent'>{Math.floor((((productPrice * 30) - (productPrice * 18)) / (productPrice * 30)) * 100)}% OFF</p>
  //   </div>
  //   )
  // }


  if (!product)
    return null

  return (

    <div className='compClass'>
      <div className='mainContentContainer'>
        <div key={id} className='selectedProduct'>
          <div className='breadcrumbs-container'>
            <Link className='breadcrumbs-link' to='/'>Home</Link> / <Link className='breadcrumbs-link' to={`/${product.category}`}>{product.category}</Link>
          </div>
          <h2 className='title'>{product.title}</h2>
          <img src={product.image} />
          <div className='productPrice'>
            <ComputeProductPrice price={product.price} />
          </div>

          {
            cartItems?.find(cartItem => cartItem.productId === product.id)?.maxQuantityExceeded ?
              <div className='maxQuantity'>
                <button type='button'>ADD TO BAG</button>
                <p>Maximum of 3 quantities can be ordered</p>
              </div>
              :
              <button id='addToBag' type='button' onClick={() => increamentProductQuantityInCart(product.category, product.id, product.image, product.price, product.title)}>ADD TO BAG</button>

          }
          <div className='ratingDetails'>
            <p id="ratingStar">{product.rating.rate} </p><AiFillStar color='#03a685' id='ratingIcon' /><p id='ratingSeparator'>|</p><p id='ratingCount'>{product.rating.count}K Ratings</p>
          </div>
          <h4>PRODUCT DETAILS</h4>
          <p className='productDesc'>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

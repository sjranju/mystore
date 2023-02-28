import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import './navbar.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from './CartContext';
// import type { CartType } from './CartContext';

// interface NavBarPropType {
//     cartQty: number
// }

const Navbar = () => {
    const { cartItems } = useContext(CartContext);

    let cartQty = cartItems?.reduce((quantity, cartItem) =>
        quantity + cartItem.quantity, 0
    ) ?? 0

    return (

        <div className='navbar'>
            {/* <img src={logo} alt='logo' /> */}


            <div className='storeLinks'>
                <ul>
                    <li>
                        <Link to="/"><img src={logo} alt='logo' /></Link>
                    </li>

                    <li>
                        <Link to="/men's clothing">Men</Link>
                    </li>
                    <li>
                        <Link to="/women's clothing">Women</Link>
                    </li>
                    <li>
                        <Link to='/electronics'>Electronics</Link>
                    </li>
                    <li>
                        <Link to='/jewelery'>Jewellery</Link>
                    </li>
                </ul>
            </div>
            <ul>
                <li>
                    <div className='cart'>
                        <Link id='cartIcon' to='/cart'><AiOutlineShoppingCart /></Link>
                        <p id='cartQuantity'>{cartQty}</p>
                    </div>

                </li>

            </ul>

        </div >



    )
}

export default Navbar


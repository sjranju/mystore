import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainPage from './MainPage'
import ComputeProductPrice from "./ComputeProductPrice";

// type StateType={
//     id:string
//     title:string
//     price:number
//     description:string
//     category:string
//     image:
// }

type PropType = {
    category: string
}

const Categories = (props: PropType) => {
    const [products, setproducts] = useState([])

    useEffect(() => {
        if (props.category !== 'MainPage') {
            fetch(`https://fakestoreapi.com/products/category/${props.category}`)
                .then(async res => {
                    console.log(`my response for ${props.category}`)
                    console.log(res.clone().json())
                    const response = await res.json()
                    setproducts(response)

                })
                .catch(error => console.log(error))
        }
        else {
            console.log("Main Page");
            callMainPage();
        }

    }, [props.category])

    const callMainPage = () => {
        <MainPage />
    }

    return (
        <div className='compClass'>

            {/* {category === 'MainPage'?<MainPage/>:''} */}
            {
                products ?
                    products.map((product) => {
                        const { id, title, image, price } = product;
                        return (
                            <div key={id} className='products'>
                                <div className='productDetails'>

                                    <Link className='productImage' to={`/productdetails/${id}`}>
                                        <img src={image} alt='product img' />
                                    </Link>
                                    <p className='productTitle'>{title}</p>
                                    <div className='productPrice'>
                                        {/* <p className='discountPrice'>₹{discount}  </p>
                                        <p className='actualPrice'>₹{cost}</p>
                                        <p className='discountPercent'>({discountPercent}% OFF)</p> */}
                                        <ComputeProductPrice price={price} />

                                    </div>
                                </div>
                            </div>
                        )
                    })

                    : ''
            }

        </div>
    )
}

export default Categories

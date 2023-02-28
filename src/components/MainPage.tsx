import React from 'react'
import shopWomen from '../img/shopWomen.jpg'
import shopMen from '../img/men4.jpg'
import shopJewel from '../img/jewel1.jpg'
import shopElectronics from '../img/electronic.jpg'
import { Link } from 'react-router-dom'
import { RiFacebookBoxFill, RiTwitterFill, RiYoutubeFill, RiInstagramFill } from "react-icons/ri"

// type hoverStateType={
//   type:string,
//   flag:boolean
// }

const MainPage = () => {
  // const [isHovering, setIsHovering] = useState(false)
  // const [imageCounter, setImageCounter] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (imageCounter === 2) {
  //       setImageCounter(0)
  //     }
  //     else {
  //       setImageCounter(imageCounter + 1)
  //     }
  //   }, 4000)

  //   return () => (clearInterval(interval))
  // }, [imageCounter])

  // let imageSlider = [clothes1, clothes2, clothes3]

  // const handleMouseOver = () => {
  //   setIsHovering(true)
  // }

  // const handleMouseOut = () => {
  //   setIsHovering(false)
  // }


  // let hoverDisplay = isHovering ?
  //   <div className='shopNowOnHover'>
  //     <p>Shop Now</Link>
  //   </div>
  //   : ''

  return (
    <div className='mainPageContainer'>
      <div className='sliderContainer'>
        {/* <h1>Main Page</h1> */}
        {/* <img src={imageSlider[imageCounter]}></img> */}
      </div>
      <div id='shopCategories'><p>CATEGORIES</p></div>
      <div className='shopNow'>
        <div className='shopWomen overlay-parent' >
          <img src={shopWomen} alt='shopWomen'></img>
          <Link to="/women's clothing">
            <div className='overlay'>
              <p id='text'>SHOP WOMEN</p>
            </div>
          </Link>
        </div>

        <div className='shopMen overlay-parent'>
          <img src={shopMen} alt='shopMen'></img>
          <Link to="/men's clothing">
            <div className='overlay'>
              <p id='text'>SHOP MEN</p>
            </div>
          </Link>
        </div>

        <div className='shopJewel overlay-parent'>
          <img src={shopJewel} alt='shopJewel'></img>
          <Link to="/jewelery">
            <div className='overlay'>
              <p id='text'>SHOP JEWELLERY</p>
            </div>
          </Link>
        </div>

        <div className='shopElectronics overlay-parent'>
          <img src={shopElectronics} alt='shopElectronics'></img>
          <Link to="/electronics">
            <div className='overlay'>
              <p id='text'>SHOP ELECTRONICS</p>
            </div>
          </Link>
        </div>

      </div>
      <div className='footerContainer'>
        <div className='onlineShopping footerDetail'>
          <div className='footerHeading'><p>ONLINE SHOPPING</p></div>
          <div>
            <ul>
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
        </div>
        <div className='customerPolicies footerDetail'>
          <div className='footerHeading'><p>CUSTOMER POLICIES</p></div>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy policy</li>
            <li>Grievance Office</li>
          </ul>
        </div>
        <div className='usefulLinks footerDetail'>
          <div className='footerHeading'><p>USEFUL LINKS</p></div>
          <ul>
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
            <li>Whitehat</li>

          </ul>
        </div>
        <div className='keepInTouch footerDetail'>
          <div className='footerHeading'><p>KEEP IN TOUCH</p></div>
          <div className='socialMedia'>
            <RiFacebookBoxFill />
            <RiTwitterFill />
            <RiYoutubeFill />
            <RiInstagramFill />
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainPage

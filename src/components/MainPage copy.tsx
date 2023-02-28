import React, { useEffect, useState } from 'react'
import clothes1 from '../images/clothes1.jpg'
import clothes2 from '../images/clothes2.jpg'
import clothes3 from '../images/clothes3.jpg'

const MainPage = () => {
  const [imageCounter, setImageCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageCounter === 2) {
        setImageCounter(0)
      }
      else {
        setImageCounter(imageCounter + 1)
      }
    }, 4000)

    return () => (clearInterval(interval))
  }, [imageCounter])

  let imageSlider = [clothes1, clothes2, clothes3]

  return (
    <div className='mainPageContainer'>
      <div className='sliderContainer'>
        {/* <h1>Main Page</h1> */}
        <img src={imageSlider[imageCounter]}></img>
      </div>
    </div>
  )
}

export default MainPage

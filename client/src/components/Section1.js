import React from 'react'
import Swiper from './Swiper'
import "../css/Section1.css"

const Section1 = () => {
  return (
    <div className='text-black bg-white flex pt-10 md:pt-12 lg:pt-16 flex-col justify-center items-center'>
        <div className='text-2xl md:text-3xl lg:text-4xl font-black'>
            We are good at these
        </div>
        <div className='swiperDiv lg:mb-5 w-screen'>
        <Swiper/>
        </div>
    </div>
  )
}

export default Section1
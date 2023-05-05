import React from 'react'
import "../css/Section6.css"

const Section6 = ({openModalFunc}) => {
  const handleOpenModal=()=>{
    openModalFunc(true)
  }
  return (
    <div className='bg-white section6 text-black flex justify-center text-center items-center flex-col '>
        <h1 className='lg:text-4xl md:text-3xl text-2xl font-black mt-20'>What's on your mind?</h1>
        <div onClick={handleOpenModal} className='py-2 lg:py-3 bg-black w-48 flex justify-center items-center cursor-pointer rounded-sm mb-7 mt-10 font-semibold text-white'>Submit a proposal</div>
        <h1 className='text-xl md:text-2xl lg:text-3xl mb-16 font-black'>Your dream made a reality, on any platform!</h1>
    </div>
  )
}

export default Section6
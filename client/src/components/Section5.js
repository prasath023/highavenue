import React from 'react'
import "../css/Section5.css"
import ReactPlayer from "react-player"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Section5 = () => {
  return (
    <div className='bg-white flex flex-col justify-center items-center text-black'>
        <div className='flex flex-col mt-10 lg:mt-16 justify-center items-center'>
         <h1 className=' text-2xl md:text-3xl lg:text-4xl font-black'>SUPERSAGA</h1>
         <h2 className='lg:mt-2 mt-1 md:text-base text-sm lg:text-lg font-medium'>Our Dream Project</h2>
        </div>
        <div className='flex flex-col lg:flex-row mt-10 lg:mt-24 justify-between lg:w-4/6'>
        <div className=' lg:hidden flex justify-center mb-5 '>
            <ReactPlayer controls height="188px" width="320px" url="https://youtu.be/G5pyNjtXorQ"/>
            </div>
            <div className='hidden lg:flex h-72 w-96 '>
            <ReactPlayer controls height="288px" width="420px" url="https://youtu.be/G5pyNjtXorQ"/>
            </div>
            <div className='w-3/4 mx-auto lg-mx-0 lg:w-2/4 lg:mb-28 lg:pl-12 pt-2 flex flex-col text-center lg:text-left justify-center lg:items-start items-center'>
<h1 className='lg:text-4xl md:text-3xl text-2xl font-bold  lineH'>Democratising the
Power of Pixar for 
millions of creators.
</h1>
<a href="http://supersaga.app/" target="_blank" className='outline-none'><div className='flex mt-5 py-2 lg:py-3 mb-10 lg:mb-20 rounded-sm cursor-pointer groupBtn1 text-white bg-black justify-start '>
   <div className='mr-2 pl-4 font-semibold'>More info</div> 
    <div className='flex items-center justify-center groupArr1'>
        <div className='-mr-3  bg-white groupLine1'></div>
        <div>
         <ArrowRightIcon/> 
        </div>
        </div>
</div></a>
            </div>
        </div>
    </div>
  )
}

export default Section5
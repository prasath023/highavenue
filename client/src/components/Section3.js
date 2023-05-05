import React from 'react'
import "../css/Section3.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ReactPlayer from "react-player"
const Section3 = () => {
  return (
    <div id="products" className='flex flex-col justify-between bg-white text-black items-center w-screen'>
        <div className='lg:my-16 my-10 md:mb-14 md:text-3xl text-2xl lg:text-4xl font-black'>Some of our works</div>
        <div className='flex justify-center flex-col lg:flex-row mb-10 lg:mb-20 items-center'>
        
        <div className='mb-5 lg:mb-0 flex flex-col justify-center items-center'>
        <ReactPlayer className="lg:hidden" controls height="188px" width="320px"  url="https://youtube.com/watch?v=K4lYeSsa_aM"/>
          <ReactPlayer className="hidden lg:flex" controls height="223px" width="320px"  url="https://youtube.com/watch?v=K4lYeSsa_aM"/>
           <h1 className='mt-6 md:mb-5 md:text-lg lg:text-xl font-semibold'>AR dev</h1>
          </div>
        <div className='mx-12 mb-5 lg:mb-0 flex flex-col justify-center items-center'>
        <ReactPlayer className="lg:hidden" controls height="188px" width="320px"  url="https://youtu.be/dCEGx-thXD4"/>
          <ReactPlayer className="hidden lg:flex" controls height="223px" width="320px"  url="https://youtu.be/dCEGx-thXD4"/>
           <h1 className='mt-6 md:mb-5 md:text-lg lg:text-xl font-semibold'>3D modelling</h1>
            
        </div>
        <div className=' flex  flex-col justify-center items-center'>
        <ReactPlayer className="lg:hidden" controls height="188px" width="320px"  url="https://youtu.be/dCEGx-thXD4"/>
          <ReactPlayer className="hidden lg:flex" controls height="223px" width="320px"  url="https://youtu.be/dCEGx-thXD4"/>
         <h1 className='mt-6 md:mb-5 md:text-lg lg:text-xl font-semibold'>Metaverse</h1>
       
        </div>
        </div>
        <div className='flex py-2 lg:py-3 lg:mb-20 md:mb-16 mb-12 rounded-sm cursor-pointer groupBtn text-white  justify-start items-center'>
        <div className='mr-2 pl-4 font-semibold'>Explore the work</div>
        <div className='flex items-center justify-center groupArr'>
        <div className='-mr-3 bg-white groupLine'></div>
        <div>
         <ArrowRightIcon/> 
        </div>
        </div>
        </div>
    </div>
  )
}

export default Section3
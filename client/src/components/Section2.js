import React from 'react'
import "../css/Section2.css"
import Split from './Split'
import workImage from "../assets/work.webp"

const Section2 = () => {
  return (
    <div id="services" className='flex bg-gray-200 section2 text-black flex-col lg:pb-20 justify-center items-center pt-10 lg:pt-16'>
        <div className='text-2xl md:text-3xl lg:text-4xl font-black '>Services we offer</div>
        <div className='flex flex-col lg:flex-row w-screen lg:px-28 justify-between items-center'>
            <div className=' flex w-3/4 md:w-2/4 lg:w-2/4 mt-10 md:mt-14 lg:mt-0 justify-start items-start'>
              <img className='' src={workImage} />
                {/* <div className='bg-green-500 h-80 w-80 box1'>
                 
                </div>
                <div className='bg-green-100 absolute h-64 w-64 box2 -mr-20 -mb-40'>

                </div> */}
            </div>
            <div className='flex justify-between lg:mt-20  items-center'>
             <Split className="split"/>
            </div>
        </div>
    </div>
  )
}

export default Section2
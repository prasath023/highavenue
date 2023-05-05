import React from 'react'
import search from "../assets/search(1).webp"
import target from "../assets/target(1).webp"
import settings from "../assets/settings.webp"
import rocket from "../assets/rocket.webp"
import talent from "../assets/talent.webp"
import brain from "../assets/brain.webp"
import "../css/Intersection.css"
const Intersection = () => {
  return (
    <div className='bg-white pb-10 lg:pb-20 inter flex flex-col justify-center items-center text-black'>
    <div className='flex flex-col mt-10 lg:mt-16 justify-center items-center'>
     <h1 className=' text-2xl md:text-3xl lg:text-4xl font-black'>Our approach</h1>
     <h2 className='lg:mt-4 mt-1 md:text-base md:mt-3 md:px-32 text-center px-5 lg:px-0 text-sm lg:text-lg font-medium'>Rapid development - propel your business towards the next breakthrough.</h2>
    </div>
        <div className='flex flex-col lg:flex-row mt-4 lg:mt-28 justify-between items-center'>
          <div className="flex  lg:w-44 text-center flex-col justify-center items-center">
            <div className='flex justify-center items-center'>
            <img className="lg:h-20 h-12 mt-10 lg:mt-0 mb-5 lg:mb-10" src={search} />
            </div>
            <h1 className="text-xs md:text-sm font-semibold lg:text-base">Deep Research &
Analysis</h1>
          </div>
          <div className="flex  lg:w-44 text-center flex-col justify-center items-center">
          <div className='flex justify-center items-center'>
          <img className="lg:h-20 h-12 mt-10 lg:mt-0 mb-5  lg:mb-10" src={brain} />
          </div>
            <h1 className="text-xs md:text-sm font-semibold lg:text-base">Conceptualize 
Strategy & Execution</h1>
          </div>
          <div className="flex  lg:w-44 text-center flex-col justify-center items-center">
            <div className='flex justify-center items-center'>
            <img className="lg:h-20 h-12 mt-10 lg:mt-0 mb-5 lg:mb-10" src={target} />
            </div>
            <h1 className="text-xs md:text-sm font-semibold lg:text-base">Design
Sprint</h1>
          </div>
          <div className="flex  lg:w-44 text-center flex-col justify-center items-center">
            <div className='flex justify-center items-center'>
            <img className="lg:h-20 h-11 mt-10 lg:mt-0 mb-5 lg:mb-10" src={settings} />
            </div>
            <h1 className="text-xs md:text-sm font-semibold lg:text-base">Implementation &
iteration</h1>
          </div>
          <div className="flex  lg:w-44 text-center flex-col justify-center items-center">
            <div className='flex justify-center items-center'>
            <img className="lg:h-20 h-12 mt-10 lg:mt-0 mb-5 lg:mb-10" src={rocket} />
            </div>
            <h1 className="text-xs md:text-sm font-semibold lg:text-base">Testing &
QA</h1>
          </div>
          <div className="flex  lg:w-44 text-center flex-col justify-center items-center">
            <div className='flex justify-center items-center'>
            <img className="lg:h-20 h-12 mt-10 lg:mt-0 mb-5 lg:mb-10" src={talent} />
            </div>
            <h1 className="text-xs md:text-sm font-semibold lg:text-base">Full
Handover</h1>
          </div>
        </div>
    </div>
  )
}

export default Intersection
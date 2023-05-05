import React from 'react'
import logo from "../assets/logo_2 1.webp"

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        
        <div className='flex flex-col lg:flex-row mt-10 mb-7 lg:my-16 lg:w-5/6 justify-between items-center'>
            <div className=' flex md:mr-6  mb-7 lg:mb-0 items-center lg:w-2/4'>
             <div>
             <img className='h-16 lg:h-16 ' src={logo}/>
             </div>
             <div>
            <div className=' lg:text-xl mb-1 font-bold'>Highavenue Creative Labs Pvt Ltd</div>
                <h1>
                hello@highavenue.co
                </h1>
                </div>
            </div>
            <div className='lg:w-2/4 text-center text-sm lg:text-base flex items-center justify-end lg:text-left'>
            13, Customs Colony, off Rajiv Gandhi Salai,<br></br>
Parthasarathy Nagar, Customs Colony, <br></br>
Sakthi Nagar, Thoraipakkam, Tamil Nadu 600097
            </div>
        </div>
        <div className='mb-5 lg:mb-10 text-xs lg:text-sm'>
        © 2022 by Highavenue Creative Labs. All rights reserved.
        </div>
    </div>
  )
}

export default Footer
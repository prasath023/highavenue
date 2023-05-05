import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-black  p-5 '>
        <div className='text-xl font-black text-white ml-5'>
            Highavenue
        </div>
        <ul className='flex cursor-pointer justify-between w-2/4 mr-10 text-xs'>
            <li>
              Services
            </li>
            <li>
                Products & Solutions
            </li>
            <li>
                Careers
            </li>
            <li>
                Contact Us
            </li>
        </ul>
    </div>
  )
}

export default Header
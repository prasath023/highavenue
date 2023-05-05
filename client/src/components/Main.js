import React, { useState } from 'react'
import homeImage from "../assets/home_image.webp"
import logo from "../assets/logo_2 1.webp"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import "../css/Main.css"
import {Link} from 'react-scroll';
const Main = ({openModalFunc}) => {
  const [open,isOpen]=useState(false)

  const handleOpenModal=()=>{
    openModalFunc(true)
  } 
const handleOpen=()=>{
  isOpen(!open)
} 

  return (
    <div id="main" className='relative main flex w-screen'>
          <img className='w-full object-cover' src={homeImage} />
<div className='absolute w-full'>
     <div className='flex  flex-col lg:flex-row justify-between items-center  lg:p-5 '>
      <div className={`flex ${open && "bg-black"} pt-3 lg:pt-0 justify-center lg:justify-between items-center w-screen`}>
        <div className='text-xl w-3/4  flex font-black justify-center lg:justify-start items-center text-white ml-5'>
      <a className='outline-none flex justify-center md:text-2xl items-center cursor-pointer' href=""><img className='h-10 md:ml-56 md:h-12 cursor-pointer ml-24 lg:ml-0' src={logo} />Highavenue</a>
        </div>
        <ul className='hidden lg:flex font-medium cursor-pointer justify-end w-2/4 mr-10 text-sm'>
            <li className='mr-20'>
               <Link to="services" spy={true} smooth={true} offset={0} duration={500} > Services </Link> 
            </li>
            <li className='mr-20'>
            <Link to="products" spy={true} smooth={true} offset={0} duration={500} > Products & Solutions </Link> 

                
            </li>
            <li onClick={handleOpenModal}>
            Contact Us

            
            </li>
        </ul>
        <div  className='flex w-1/4 cursor-pointer justify-end text-white mr-7 lg:hidden md:mr-20' >
         {!open && <MenuIcon onClick={handleOpen} />}
         {open && <CloseIcon onClick={handleOpen} className=' ' />}
      </div>
      </div>
      {open && 
      <div className='h-screen lg:hidden mb-96 text-white w-screen bg-black'>
      
      <div className='flex h-screen flex-col justify-start items-center w-full overflow-hidden '>
      <ul className='flex flex-col justify-center mt-40 md:mt-56 text-xl font-semibold items-center w-full  '>
          
         <li  className='cursor-pointer pb-10 md:pb-14 '>
          <Link onClick={()=>{
            
            handleOpen()
          }} to="services" spy={true} smooth={true} offset={0} duration={500} > Services </Link> 

          </li>
          <li className='cursor-pointer pb-10 md:pb-14 '>
          <Link onClick={()=>{
            
            handleOpen()
          }}  to="products" spy={true} smooth={true} offset={0} duration={500} > Products & Solutions </Link> 

          </li>
          <li onClick={()=>{
            handleOpenModal()
            handleOpen()
          }} className='cursor-pointer mb-96 md:mb-96'>
           
           Contact Us

         </li>
        </ul>
        {/* <div className=' w-3/4 mx-auto px-7 md:px-16 pt-10 md:pt-14 font-light flex justify-between'>
      <a className='outline-none' href="" target="_blank"><img className='w-5 h-5 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={tiktok}/></a>  
      <a className='outline-none' href="https://twitter.com/supersaga_app" target="_blank"><img className='w-5 h-5 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={twitter}/></a> 
      <a className='outline-none' href="https://www.instagram.com/supersaga.app/" target="_blank"><img className='w-5 h-5 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={instagram}/></a> 
      <a className='outline-none' href="https://www.linkedin.com/company/supersaga-app/" target="_blank"><img className='w-5 h-5 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={linkedin}/></a> 
      </div> */}
        </div>
      </div>}
    </div>
    <div className='flex flex-col pb-16 font-black  text-white  justify-center items-center mt-28'>
    <div className='textMain mx-10 text-center lg:text-5xl'>Let us help you build your next</div>
    <div className='mt-4 lg:mt-10 text-6xl meta'>
    <div className='span1 flex flex-col pl-3  pt-1 items-center pr-2'>
          <span className='change'>METAVERSE</span>
          <span className='change'>MOBILE & WEB APP</span>
          <span className='change'>GAME</span>
          <span className='change'>3D ANIMATION</span>
          <span className='change'>METAVERSE</span>
          </div> 
    </div>
    <div  onClick={handleOpenModal} className='md:mt-28 lg:mt-24 mt-24 accessBtn md:h-11 flex text-sm md:text-base lg:text-lg cursor-pointer justify-center items-center h-9 lg:h-14 rounded-sm bg-white text-black'>Get a quote in 24 hours</div>
    </div>
    </div>
    </div>
  )
}

export default Main
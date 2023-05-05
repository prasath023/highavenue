import React, { useState } from 'react'
import "../css/Split.css"
import youtube from "../assets/3d-model.webp"
import console from "../assets/console.webp"
import videoCamera from "../assets/mobile-development.webp"
import penTool from "../assets/vr-glasses.webp"
import vr from "../assets/virtual-assistant.webp"

const Split = () => {
    const [open1, isOpen1]=useState(false);
    const [open2, isOpen2]=useState(false);
    const [open3, isOpen3]=useState(false);
    const [open4, isOpen4]=useState(false);
    const [open5, isOpen5]=useState(false);

  
    // const handleOpen1=()=>{
    //     isOpen1(!open1)
    //     isOpen3(false)
    //     isOpen2(false)
    //     isOpen4(false)
    //     isOpen5(false)
    // }
    // const handleOpen2=()=>{
    //     isOpen2(!open2)
    //     isOpen3(false)
    //     isOpen1(false)
    //     isOpen4(false)
    //     isOpen5(false)
    // }
    // const handleOpen3=()=>{
    //     isOpen3(!open3)
    //     isOpen1(false)
    //     isOpen2(false)
    //     isOpen4(false)
    //     isOpen5(false)
    // }
    // const handleOpen4=()=>{
    //     isOpen4(!open4)
    //     isOpen3(false)
    //     isOpen2(false)
    //     isOpen1(false)
    //     isOpen5(false)
    // }
    // const handleOpen5=()=>{
    //     isOpen5(!open5)
    //     isOpen3(false)
    //     isOpen2(false)
    //     isOpen4(false)
    //     isOpen1(false)
    // }

  return (
    <div className='flex justify-center lg:text-base text-sm split items-center flex-col'>
        <div className="mb-5 flex justify-start items-center lg:p-5 p-3 cursor-pointer rounded-sm box3 text-black font-medium w-72 lg:w-96">
            <img className="h-7 lg:h-10 mr-3 lg:mr-5" src={console} />
            <div>Games (Unity & Unreal Engine)</div>
        {/* {open1 && <div className='h-40'>1</div>} */}
        </div>
        <div className="mb-5 flex justify-start items-center lg:p-5 p-3 cursor-pointer rounded-sm box3 text-black font-medium w-72 lg:w-96">
        <img className="h-7 lg:h-10 mr-3 lg:mr-5" src={penTool} />
            <div>Augmented Reality</div>
        {/* {open2 && <div className='h-40'>2</div>} */}
        </div>
        <div className="mb-5 flex justify-start items-center lg:p-5 p-3 cursor-pointer rounded-sm box3 text-black font-medium w-72 lg:w-96">
        <img className="h-7 lg:h-10 mr-3 lg:mr-5" src={videoCamera} />
            <div>Mobile & Web applications</div>
        {/* {open3 && <div className='h-40'>3</div>} */}
        </div>
        <div className="mb-5 flex justify-start items-center lg:p-5 p-3 cursor-pointer rounded-sm box3 text-black font-medium w-72 lg:w-96">
        <img className="h-7 lg:h-10 mr-3 lg:mr-5" src={youtube} />
            <div>3D Modelling & Animation</div>
        {/* {open4 && <div className='h-40'>4</div>} */}
        </div>
        <div className=" lg:p-5 flex justify-start items-center p-3 cursor-pointer rounded-sm box3 text-black font-medium w-72 lg:w-96">
        <img className="h-7 lg:h-10 mr-3 lg:mr-5" src={vr} />
            <div>Metaverse Applications</div>
        {/* {open5 && <div className='h-40'>5</div>} */}
        </div>
    </div>
  )
}

export default Split
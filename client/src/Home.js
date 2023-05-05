import React ,{useState} from 'react'
import Footer from './components/Footer.js'
import Header from "./components/Header.js"
import Main from './components/Main.js'
import Section1 from './components/Section1.js'
import Section2 from './components/Section2.js'
import Section3 from './components/Section3.js'
import Section4 from './components/Section4.js'
import Section5 from './components/Section5.js'
import Section6 from './components/Section6.js'
import Form from "./components/Form"
import Intersection from './components/Intersection.js'

const Home = () => {
  const [open,setOpen]=useState(false)

  const openModalFunc=(val)=>{
    setOpen(val)
    }
  return (
    <div className='bg-black text-white'>
     
    {open ? <Form className="h-full bg-black" openModalFunc={openModalFunc} />
    :   <>
        <Main openModalFunc={openModalFunc}/>
        <Section1/>
        <Section2/>
        <Intersection/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6 openModalFunc={openModalFunc}/>
        <Footer/>
        </>
}
    </div>
  )
}

export default Home
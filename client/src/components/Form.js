import React, { useEffect, useRef, useState } from 'react'
import "../css/Form.css"

import { db } from "../firebase"
import PhoneInput from 'react-phone-number-input'
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { addDoc } from "firebase/firestore";
import  axios  from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import 'react-phone-number-input/style.css'
import { async } from '@firebase/util';

const Form = ({openModalFunc}) => {

    const [mailId,setMailId]=useState("");
    const [value,setValue]=useState("");
    const [details, setDetails]=useState()
    const [newMail,isNewMail]=useState(true);
    const [rejects,setRejects]=useState(false);
    const [companyName, setCompanyName]=useState("")
    const [budget, setBudget]=useState()
    const [userName, setUserName]=useState("")
    const [story,setStory]=useState("");
    const[submit,isSubmit]=useState(false);
    const [success,setSuccess]=useState(false)
    const form=useRef()
    const [userCount,setUserCount]=useState()
    let count=0
    const auth= getAuth()
    useEffect(() => {
      signInWithEmailAndPassword(auth,"pr13572023@gmail.com","sakthivel13572023")
      .then((userCredential)=>{
        console.log(userCredential.user.uid);
      })
    }, [])
    let dataEmail={
            email: mailId,
            name: userName,
            phone: value,
            message: story,
            budget: budget,
            company: companyName,
    }
   
    const handleSubmit=async(e)=>{
      e.preventDefault();
      // mailId && sendEmail(e)
      // mailId && emailjs.sendForm('service_r8k7z3a', 'template_fuvcnif',form.current,'eR2LkyQjCAK-jlmoi',)
      // mailId && emailjs.sendForm('service_h6plny1', 'template_vub6qxv',form.current, 's1DaooQCbyizlmOIK')
      // mailId && emailjs.sendForm('service_r8k7z3a', 'template_sgistwt',form.current, 'eR2LkyQjCAK-jlmoi')
      
      const fetchData = async()=>{
        const q = query(collection(db, "access"));
        const querySnapshot = await getDocs(q);
        const data=querySnapshot.docs
       for(let i=0; i < data.length; i++){
       
        if(mailId !== data[i].data().email){
         
        }
        else{
          setRejects(true)
          console.log("settin true")
          console.log(newMail);
         return isNewMail(false)
        }
       }
       
      if(newMail){
        try {
          const docRef = mailId && await addDoc(collection(db, "access"), {
            email: mailId,
            name: userName,
            phone: value,
            message: story,
            budget: budget,
            company: companyName,
            // country: details && details.country_name,
            // time: new Date().toLocaleString(),
          });
      mailId && setSuccess(true)
      await axios.post("https://highavenue1.herokuapp.com/notice",dataEmail)
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
          
      setMailId("")
      setStory('')
      setValue("")
      setCompanyName("")
      setBudget("")
      setUserName("")
      }
     
        }
      
         

     
       
        fetchData()
        setTimeout(() => {
         
            setSuccess(false)
       
            setRejects(false)
          
         
        }, 9000);
        setTimeout(() => {
          isNewMail(true)
        }, 2000);
  
     
    }
  
  
  useEffect(()=>{
    async function fetchData() {
      const q = query(collection(db, "access"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      count++
      setUserCount(count)
      });
    }
    fetchData()
  },[handleSubmit])
  
    // const sendEmail = (e) => {
    //   e.preventDefault();
    //   emailjs.sendForm('service_h6plny1', 'template_43bwu5n', e.target, 's1DaooQCbyizlmOIK')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };
  
  
    const handleChange1=(e)=>{
      e.preventDefault();
      setMailId(e.target.value)
    }
    
    const handleChange3=(e)=>{
      e.preventDefault();
      setStory(e.target.value)
    }
    const handleChange2=(e)=>{
      e.preventDefault();
      setUserName(e.target.value)
    }
      
    const handleChange4=(e)=>{
      e.preventDefault();
      setCompanyName(e.target.value)
    }
    const handleChange5=(e)=>{
      e.preventDefault();
      setBudget(e.target.value)
    }
    const handleClose=()=>{
      openModalFunc(false)
    } 
  

  return (
    <div className='bg-black relative overflow-y-hidden justify-center items-center h-screen height lg:h-full   w-screen'>
          {success && <div className={`text-green-400 font-black text-lg  md:text-xl lg:text-2xl flex items-center justify-center w-screen z-10 success absolute`}><h1 className='mt-20 lg:mt-40 md:mt-40'>Your quote has been submited</h1></div>}
          {rejects && <div className={`text-red-400 w-screen justify-center font-black text-lg  md:text-xl lg:text-2xl  flex items-cenetr z-10 rejects absolute `}><h1 className='mt-20 lg:mt-40 md:mt-40'>Email already exists </h1></div>}
         <div className='flex md:-mt-2  -mt-3 lg:mt-0 flex-col justify-start items-center w-screen'>
          {/* <div className='lg:flex lg:h-24 justify-between items-center hidden w-screen'>
      <a className='outline-none' href=""><img className='w-40 lg:ml-24 md:w-44 lg:w-48 mr-4 md:mr-10  cursor-pointer' src={logo} /></a>  
      <div className='hidden w-1/4 text-white font-light lg:flex justify-end '>
      <a className='outline-none' href="" target="_blank"><img className='w-4 h-4 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={tiktok}/></a>  
      <a className='outline-none' href="https://twitter.com/supersaga_app" target="_blank"><img className='w-4 h-4 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={twitter}/></a> 
      <a className='outline-none' href="https://www.instagram.com/supersaga.app/" target="_blank"><img className='w-4 h-4 lg:w-6 lg:h-6 lg:mr-6 cursor-pointer' src={instagram}/></a> 
      <a className='outline-none' href="https://www.linkedin.com/company/supersaga-app/" target="_blank"><img className='w-4 h-4 lg:w-6 lg:h-6 lg:mr-16 cursor-pointe ' src={linkedin}/></a> 
      </div>
          </div> */}
          <div className='w-screen flex justify-center items-center flex-col'>
          <div className='flex  top justify-center lg:px-5 lg:mr-3 pt-10 lg:pt-20 items-center w-screen lg:w-2/4'>
          <div className='flex  font-black justify-center items-center text-2xl lg:text-4xl  md:text-3xl w-full md:w-3/4 lg:w-3/4'>
      <h1 className=' lg:flex md:ml-56 ml-24 lg:ml-0'>Get in touch</h1>
      {/* <a className='outline-none' href=""><img className='w-40 md:w-44 lg:w-48 mr-4 md:mr-10 lg:hidden lg:mr-0 cursor-pointer' src={logo} /></a>   */}
      </div>
          <div  className='w-1/4  flex cursor-pointer justify-end items-center text-white  md:mr-20 mr-7' >
          
          <CloseIcon onClick={handleClose} className='z-50 lg:mt-0 text-white cursor-pointer' />
      </div>
          </div>
          <div className='lg:mt-20 mt-20 md:mt-36 '>
          <form ref={form} className="flex flex-col justify-start items-start" onSubmit={handleSubmit}>
            <input readOnly value={userCount+1} name="userCount" className='hidden' type='text'  />
            <p className='lg:mb-5 lg:mt-5 font-medium md:mb-3 mb-2 text-white text-sm md:text-lg lg:text-xl'>Name <span className='star'>*</span> :</p>
            <input required  onChange={handleChange2} value={userName} name="name" placeholder='Your name' className='lg:text-lg md:text-base bg-black text-xs input11 relative outline-none px-2 lg:px-5  mb-4' type='text'  />
            <p className='lg:mb-5 lg:mt-5 font-medium md:mb-3 mb-2 text-white text-sm md:text-lg lg:text-xl'>Email <span className='star'>*</span> :</p>
            <input required onChange={handleChange1} value={mailId} name="email" placeholder='Your email' className='lg:text-lg md:text-base bg-black text-xs input11 relative outline-none px-2 lg:px-5  mb-4' type='email'  />
            <p className='md:mb-5 lg:mt-5 md:mt-2 mt-1  font-medium mb-3 lg:mb-8 text-white text-sm md:text-lg lg:text-xl'>Phone Number : <br></br><span className='lg:text-base md:text-sm text-xs'>(optional)</span></p>
            <div  className="flex h-9 justify-center mb-7 items-center">
            <PhoneInput
     international
     countryCallingCodeEditable={false}
     defaultCountry="IN"
     value={value}
     required
     onChange={setValue}
      className="px-5  flex h-20 border lg:text-lg md:text-base text-xs border-gray-400 outline-none"
     />
            </div>
            <p className='lg:mb-5 lg:mt-5 font-medium md:mb-3 mb-2 text-white text-sm md:text-lg lg:text-xl'>Company Name <span className='star'>*</span> :</p>
            <input required onChange={handleChange4} value={companyName} name="companyName" placeholder='Your company name' className='lg:text-lg md:text-base bg-black text-xs input11 relative outline-none px-2 lg:px-5  mb-4' type='text'  />
            <p className='lg:mb-5 lg:mt-5 font-medium md:mb-3 mb-2 text-white text-sm md:text-lg lg:text-xl'>Budget <span className='star'>*</span> :</p>
            <input required onChange={handleChange5} value={budget} name="budget" placeholder='Total budget' className='lg:text-lg md:text-base bg-black text-xs input11 relative outline-none px-2 lg:px-5  mb-4' type='number'  />
            <p className='lg:mb-5 lg:mt-5 -mt-1 md:mt-2  md:mb-3 font-medium mb-3 text-white text-sm md:text-lg lg:text-xl '>Message : <br></br><span className='lg:text-base md:text-sm text-xs'>(optional)</span></p>
            <textarea onChange={handleChange3} value={story} name="story" placeholder='Your message ' className='md:mb-6 mb-5 lg:mb-10 input111 relative outline-none px-2 lg:text-lg md:text-base text-xs  bg-black lg:px-5 pt-3 lg:pt-5 md:pt-4' type='text'  />
            
            <button  type='submit' onSubmit={handleSubmit} className='mx-auto lg:mb-20 o outline-none text-white font-semibold  text-xs md:text-sm lg:text-xl btn11 '>
              Submit
            </button>
           
            
          </form>
          </div>
          </div>
         </div>
    </div>
  )
}

export default Form
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import validator from 'validator';
import logo from "../images/illustration-dashboard.png";
// import Ionicons  from '@ionic/react';
// import { InvertMode, InvertModeOutline, LogoFacebook, LogoInstagram, LogoTwitter,  } from 'react-ionicons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { facebook-f } from '@fortawesome/'
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


export default function App() {

  const [email, setEmail] = useState('')  
  const [emailError, setEmailError] = useState(false)

  const validateEmail = () => {

    if (validator.isEmail(email)) {
      setEmailError(false)
      setEmail('')
    } else {
      setEmailError(true)
    }

  }



  return (
    <div className='flex flex-col items-center mt-[20%] lg:mt-[5%] w-full' >
      <h2 className="text-xl lg:text-2xl font-bold">
        PING<span className='text-[#5983FF]'>.</span>
      </h2>
      <p className='lg:tracking-wide font-thin text-2xl lg:text-3xl text-[#959494] mt-[10%] lg:mt-8' >
        We are launching <span className='text-black font-bold'>soon!</span>
      </p>
      <p className='text-[#1B1E20] font-medium text-xs lg:text-sm mt-[5%] lg:mt-4'>
        Subscribe and get notified
      </p>
      <div className={`flex flex-col lg:flex-row w-full lg:w-1/3 items-center mt-8 ${(!emailError)?('gap-2'):('gap-8')} lg:gap-3`}>
        <input 
          type="text" 
          className={`border-[1px] rounded-full w-3/4 text-xs px-6 py-3 placeholder:text-slate-300 mt-2 ${(!emailError)?("border-slate-300"):("border-[#B7757C]")}`}
          placeholder='Your email address...'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button 
          type='button' 
          className='bg-[#4C7BF2] hover:bg-[#7095F2] cursor-pointer border-2 rounded-full w-3/4 lg:w-1/3 px-6 py-3 placeholder:text-slate-300 mt-2'
          onClick={validateEmail}
        >
          <p className='text-xs text-white font-semibold'>Notify Me</p>
        </button>
      <p className={`text-[#B7757C] text-xs italic px-6 mt-14 lg:mt-20 absolute ${(!emailError)?('invisible'):('visible')}`}>
        Please provide a valid email address
      </p>
      </div>
      <img src={logo} alt="illustration" className='w-5/6 lg:w-1/3 mt-12 lg:mt-10'/>
      <div className='flex flex-row gap-3 absolute bottom-20'>
        <button className='w-10 h-10 rounded-full bg-blue border hover:bg-[#4C7BF2]' id='socialbutton'>
          <FontAwesomeIcon icon={faFacebookF} id="social" />
        </button>
        <button className='w-10 h-10 rounded-full bg-blue border hover:bg-[#4C7BF2]' id='socialbutton'>
          <FontAwesomeIcon icon={faInstagram} id="social"/>
        </button>
        <button className='w-10 h-10 rounded-full bg-blue border hover:bg-[#4C7BF2]' id="socialbutton">
          <FontAwesomeIcon icon={faTwitter} id="social"/>
        </button>
      </div>
      <p className='text-xs text-slate-400 absolute bottom-10'>
        @ Copyright Ping. All rights reserved.
      </p>
    </div>
  )
}
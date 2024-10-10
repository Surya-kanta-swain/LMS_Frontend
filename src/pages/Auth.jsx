import React, { useState } from 'react'
import './Auth.css'
import Signin from '../componemts/Signin'
import Signup from '../componemts/Signup'

import img3 from '../assets/image5.jpg'
import img4 from '../assets/image6.jpg'

const Auth = () => {
    const[isRegister,setIsRegister]=useState(false)
    const togglePannel=()=>{
        setIsRegister(!isRegister)
    }
  return (
    <div className='flex justify-center h-screen items-center overflow-hidden'>

    <div className='box lg:max-w-4xl'>
        {/* rotating image box */}
    <div className={`cover ${isRegister ? "rotate-active":""}`}>
<div className='front'>
    <img src={img3}/>

</div>
<div className='back'>
<img src={img4}/>


</div>

    </div>
    <div className='forms h-full'>

        <div className='form-content h-full'>
            <div className='login-form'>
<Signin togglePannel={togglePannel}/>
            </div>
            <div className='signup-form'>
                <Signup togglePannel={togglePannel}/>
            </div>
        </div>
    </div>

     
    </div>

    </div>
  )
}

export default Auth
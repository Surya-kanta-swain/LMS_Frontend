import React, { useState } from 'react'
import { Box, Grid, Modal, TextField, Button ,Typography} from '@mui/material';
import axios from 'axios';



const Signin = ({togglePannel}) => {
  const [error,setError]=useState("");
    const[formData,setFormData]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData({...formData,
            [name]:value
     } )
     setError("");
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();


   try {
    const res = await axios.post("http://localhost:8081/api/users/signin",formData)
    localStorage.setItem("id1",res.data.id)
    
   if(!res.data){
      setError("Invalid Email or password");
   }
  
   } catch (error) {
    console.log(error)
   }
    }
  return (
    <div>
    <h1 className='text-lg font-bold text-center pb-8'>Login</h1>

<form className='space-y-3' onSubmit={handleSubmit}>
<TextField fullWidth label="Email" name='email' type='email' value={formData.email} onChange={handleChange} placeholder='enter email'/>
<TextField fullWidth label="Password" name='password' type='password' value={formData.password} onChange={handleChange} placeholder='enter password'/>
<div >
  
   {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        
        <Button fullWidth className="customButton"
          sx={{
          display: 'flex',
          color:'#000',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #7CB9E8',
          borderRadius: '5px',
          width: '5rem',
          height: '3rem',
          backgroundColor: '#7CB9E8',
          
        }} type='submit'> Login </Button>
   </div>
</form>    

<div className='mt-5 flex items-center gap-2 py-5 justify-center'>
    <span>Don't have an acount?</span>
    <Button onClick={togglePannel}>sign up</Button>
</div>
    </div>
  )
}

export default Signin;
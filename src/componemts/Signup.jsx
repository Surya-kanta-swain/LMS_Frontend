import React, { useState } from 'react'
import {TextField, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';


const Signup = ({togglePannel}) => {

    const[formData,setFormData]=useState({
        email:"",
        password:"",
        department:"",
        role:"",
        days: 30,

    })
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData({...formData,
            [name]:value
     } )
    }
  
    const handleSubmit= async (e)=>{
        e.preventDefault();
       const res = await axios.post("http://localhost:8081/api/users/",formData)
       console.log("in sign up page",res.data)

       localStorage.setItem("id1",res.data.id)
        console.log(formData);
    }
  return (
    <div>
    <h1 className='text-lg font-bold text-center pb-8 translate-y-[50%]'>Register</h1>
<form className='space-y-3' onSubmit={handleSubmit}>

<TextField fullWidth label="Email" name='email' type='email' value={formData.email} onChange={handleChange} placeholder='enter email'/>
<TextField fullWidth label="Password" name='password' type='password' value={formData.password} onChange={handleChange} placeholder='enter password'/>

<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          id="demo-simple-select"
          value={formData.department}
          label="Department"
          name='department'
          onChange={handleChange}
        >
          <MenuItem value={`IT`}>IT</MenuItem>

        </Select>
      </FormControl>

<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          id="demo-simple-select"
          value={formData.role}
          label="Role"
          name='role'
          onChange={handleChange}
        >
          <MenuItem value={`manager`}>MANAGER</MenuItem>
          <MenuItem value={"employee"}>EMPLOYEE</MenuItem>
        </Select>
      </FormControl>
<div >

                  <Button
                    fullWidth
                    className=""
                    sx={{
          display: 'flex',
          alignItems: 'center',
          color:'black',
          justifyContent: 'center',
          border: '1px solid #74C365',
          borderRadius: '5px',
          width: '6rem',
          height: '3rem',
          backgroundColor: '#74C365',
        }}                 
           type='submit'
                  >
                    Register
                  </Button>
                </div>
</form>    
<div className='mt-5 flex items-center gap-2 py-5 justify-center translate-y-[-45%]'>
    <span>Already have an acount?</span>
    <Button onClick={togglePannel}>sign in</Button>
</div>
    </div>
  )
}

export default Signup
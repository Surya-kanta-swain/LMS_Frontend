import React, { useEffect, useState } from 'react';
import './LeaveForm.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateLeave() {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    leaveCause: '',
    status:"PENDING"
  });

  const [errors, setErrors] = useState({});
  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchLeave = async ()=>{
     try {
       const response = await axios.get(`http://localhost:8081/api/leave/${id}`)
       const data =response.data
       console.log(data);
       setFormData(data)
       
     } catch (error) {
       console.log(error)
       
     }
    }
    fetchLeave();
     },[id])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.patch(`http://localhost:8081/api/leave/${id}`,formData)
        alert(`leave has been sent.\n Your id is : ${response.data.id}`)
        console.log("leave user ",response);
    } catch (error) {
        console.log(error)
    }
    console.log(formData);

  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.name]: '', // Clear the error when the field is changed
    });
  };

  return (
    <>
      <form className='p-1 border-2 w-[35%] mx-auto rounded-lg flex flex-col gap-2 shadow-lg shadow-gray-700 mb-20' onSubmit={handleSubmit}>
      <h1 className='text-center font-bold text-3xl bg-blue-500 w-full rounded-t-xl h-10 '> Update Leave Form :{id}</h1>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
        {errors.startDate && <p>{errors.startDate}</p>}

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
        {errors.endDate && <p>{errors.endDate}</p>}

        <label htmlFor="leaveCause">Reason for Leave:</label>
        <textarea className='p-1'
          id="leaveCause"
          name="leaveCause"
          value={formData.leaveCause}
          onChange={handleChange}
        />
        {errors.reason && <p>{errors.reason}</p>}

        <button type="submit" className='bg-blue-400 p-1'>Update Leave Request</button>
      </form>
    </>
  );
}

export default UpdateLeave;

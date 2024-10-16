import React, { useState } from 'react';
import './LeaveForm.css';
import axios from 'axios';

function LeaveForm() {
  const id1 = localStorage.getItem("id1");
  const da = localStorage.getItem("userType1");
  const bal = parseInt(localStorage.getItem("remainingBalance")) || 0;
  console.log("Remaining Balance from localStorage: ", localStorage.getItem("remainingBalance"));  // Debugging
  console.log("Parsed Remaining Balance (bal): ", bal);
  


  // console.log("Bal"+bal);

  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    leaveCause: '',
    status: "PENDING",
    uid: parseInt(id1),
    departmentName: da,
    leaveType: "",
  });
   const[LeaveMsg,SetLeaveMsg]=useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const date1 = new Date(formData.startDate);
    const date2 = new Date(formData.endDate);
    const differenceInMilliseconds = date2 - date1;
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24) + 1;

    // Validation checks
    const newErrors = {};
    if (!formData.startDate) newErrors.startDate = "Start date is required.";
    if (!formData.endDate) newErrors.endDate = "End date is required.";
    if (!formData.leaveType) newErrors.leaveType = "Leave type is required.";
    if (date1 > date2) newErrors.date = "End date must be after start date.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return; 
    }

    if (differenceInDays <= bal) {
      try {
        const response = await axios.post('http://localhost:8081/api/leave/', formData);
        // alert(`Leave request sent. Your ID is: ${response.data.id}`);
        SetLeaveMsg("Request has be send successfully");
      } catch (error) {
        console.error("Error submitting leave request:", error);
        alert("There was an error submitting your leave request.");
      }
    } else {
      // alert("No holiday available.");
      SetLeaveMsg("No Holidays Available");
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.name]: '', 
    });
  };

  return (
<>

{
 LeaveMsg==="Request has be send successfully" &&(
  <div className='p-4 text-center bg-green-500 text-white mt-4 rounded-lg'>{LeaveMsg}</div>
 )
}
{
 LeaveMsg==="No Holidays Available" &&(
  <div className='p-4 text-center bg-red-500 text-white mt-4 rounded-lg'>{LeaveMsg}</div>
 )
}
    <form className='leave-form' onSubmit={handleSubmit}>
      <h1 className='form-header'>Leave Form</h1>

      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        className='form-input'
      />
      {errors.startDate && <p className="error">{errors.startDate}</p>}

      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        className='form-input'
      />
      {errors.endDate && <p className="error">{errors.endDate}</p>}
      {errors.date && <p className="error">{errors.date}</p>}

      <label htmlFor="leaveType">Type of Leave:</label>
      <select
        id="leaveType"
        name="leaveType"
        value={formData.leaveType}
        onChange={handleChange}
        className='form-select'
      >
        <option value="">Select a reason</option>
        <option value="sick">Sick</option>
        <option value="vacation">Vacation</option>
        <option value="personal">Personal</option>
      </select>
      {errors.leaveType && <p className="error">{errors.leaveType}</p>}

      <label htmlFor="leaveCause">Reason for Leave:</label>
      <textarea
        id="leaveCause"
        name="leaveCause"
        value={formData.leaveCause}
        onChange={handleChange}
        className='form-textarea'
      />
      {errors.leaveCause && <p className="error">{errors.leaveCause}</p>}

      <button type="submit" className='submit-button'>Submit Leave Request</button>
    </form>
    </>
  );
}

export default LeaveForm;

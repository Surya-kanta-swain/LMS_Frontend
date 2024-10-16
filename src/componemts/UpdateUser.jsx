import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const UpdateUser = () => {
 const {id} = useParams();  
// const params = useParams()
const navigate = useNavigate()
// const id = params.id;  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    department: '',
    role: '',
    days: 20,
  });
  const [error,setError]=useState({});
  useEffect(()=>{
 const fetchUser = async ()=>{

  try {
    const response = await axios.get(`http://localhost:8081/api/users/${id}`)
    const data =response.data
    console.log(data);
    setFormData(data)
  } catch (error) {
    console.log(error)
    
  }
 }
 fetchUser();
  },[id])
 
  const validateform=(formdata)=>{
    const errors={};
    if(!formdata.email){
      errors.email="email is required";
    }
    if(!formdata.password)errors.password="password is required";
    if(!formdata.department)errors.department="department is required";
     if(!formdata.role)errors.role="role is required";
return errors;
  }
  const handleSubmit = async (event) => {
   
   
    event.preventDefault();
    // if(!formData.email||!formData.password){
    //   alert("Please Enter Valid data")
    //   return;
    // }
    const validateFormData=validateform(formData);
    if(Object.keys(validateFormData).length>0){
      setError(validateFormData);
      return;
    }

    try {
        const response = await axios.patch(`http://localhost:8081/api/users/${id}`,formData)
        alert(`user has been sent ${response.data.id}`)
        console.log("post user ",response.data);
        navigate("/")
    } catch (error) {
        console.log(error)
    }
    console.log(formData);

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setError((prevErrors)=>({
      ...prevErrors,
      [name]:'',
    }

    ));
  };

  return (
    <>
    <h1 className='text-center text-3xl font-bold underline'>Update User Page:  id={id}</h1>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
         {
        error.email &&<p className='text-red-500'>{error.email}</p> 
      }
      </div>
     
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      {
        error.password &&<p className='text-red-500'>{error.password}</p> 
      }
      </div>
     
      <div className="mb-4">
  <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">
    Department:
  </label>
  <select
    id="department"
    name="department"
    value={formData.department}
    onChange={handleInputChange}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  >
    <option value="">Select a department</option>
   
    <option value="IT">IT</option>
   
  </select>
  {
        error.department &&<p className='text-red-500'>{error.department}</p> 
      }
</div>

<div className="mb-4">
  <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
    Role:
  </label>
  <select
    id="role"
    name="role"
    value={formData.role}
    onChange={handleInputChange}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  >
    <option value="">Select a role</option>
    <option value="employee">Employee</option>
    <option value="manager">Manager</option>
  </select>
  {
        error.role &&<p className='text-red-500'>{error.role}</p> 
      }
</div>

      <div className="mb-4">
        <label htmlFor="days" className="block text-gray-700 text-sm font-bold mb-2">
          Days:
        </label>
        <input
          type="number"
          id="days"
          name="days"
          value={formData.days}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Edit Employee
      </button>
    </form>
    <Link to={`/userList`} >user List</Link>
   </>
  );
};

export default UpdateUser;
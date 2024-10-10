import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PostUser = () => {
  const navigate = useNavigate();
  const [usercreate, setUserCreate] = useState("");
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    department: '',
    role: '',
    days: 50,
  });
  const [errors, setErrors] = useState({}); // State for validation errors

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validate form data
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:8081/api/users/", formData);
      //alert(`User has been created with ID: ${response.data.id}`);
      setUserCreate("User created");
      //navigate("/userlist");
    } catch (error) {
      console.log(error);
    }
  };

  // Validation logic
  const validateForm = (data) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = 'Valid email is required';
    }
    if (!data.password || data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!data.department) {
      errors.department = 'Department is required';
    }
    if (!data.role) {
      errors.role = 'Role is required';
    }
    if (data.days <= 0) {
      errors.days = 'Days must be greater than 0';
    }
    
    return errors;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear errors for the current field
  };

  return (
    <>
      {usercreate && (
        <div className="p-4 text-center bg-green-500 text-white mt-4 rounded-lg">
          {usercreate}
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl mx-auto p-4 mb-4 border-2 w-full max-w-lg sm:max-w-3xl lg:max-w-2xl">
        <h1 className="text-center font-bold text-3xl bg-blue-500 w-full rounded-t-xl h-11 p-2">User</h1>

        {/* Email Field */}
        <div className="mb-4 mt-4 flex flex-col md:flex-row gap-2 items-center">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 md:mb-0 md:w-1/3">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-2/3 ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-4 flex flex-col md:flex-row gap-2 items-center">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 md:mb-0 md:w-1/3">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-2/3 ${
              errors.password ? 'border-red-500' : ''
            }`}
          />
          {errors.password && <p className="text-red-500 text-xs italic mt-2">{errors.password}</p>}
        </div>

        {/* Department Field */}
        <div className="mb-4 flex flex-col md:flex-row gap-2 items-center">
          <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2 md:mb-0 md:w-1/3">Department:</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-2/3 ${
              errors.department ? 'border-red-500' : ''
            }`}
          >
            <option value="">Select a department</option>
            <option value="IT">IT</option>
          </select>
          {errors.department && <p className="text-red-500 text-xs italic mt-2">{errors.department}</p>}
        </div>

        {/* Role Field */}
        <div className="mb-4 flex flex-col md:flex-row gap-2 items-center">
          <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2 md:mb-0 md:w-1/3">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-2/3 ${
              errors.role ? 'border-red-500' : ''
            }`}
          >
            <option value="">Select a role</option>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
          </select>
          {errors.role && <p className="text-red-500 text-xs italic mt-2">{errors.role}</p>}
        </div>

        {/* Days Field */}
        <div className="mb-4 flex flex-col md:flex-row gap-2 items-center">
          <label htmlFor="days" className="block text-gray-700 text-sm font-bold mb-2 md:mb-0 md:w-1/3">Days:</label>
          <input
            type="number"
            id="days"
            name="days"
            value={formData.days}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-2/3 ${
              errors.days ? 'border-red-500' : ''
            }`}
          />
          {errors.days && <p className="text-red-500 text-xs italic mt-2">{errors.days}</p>}
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-2 transition-all duration-300"
        >
          Submit
        </button>
      </form>

      <Link to={`/userList`} className="block text-center text-blue-600 mt-4 underline">
        View User List
      </Link>
    </>
  );
};

export default PostUser;

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const id1 = localStorage.getItem("id1");

  useEffect(() => {
    const fetchData = async () => {
      if (id1) {
        try {
          const res = await axios.get(`http://localhost:8081/api/users/${id1}`);
          localStorage.setItem("userType1",res.data.department)
          localStorage.setItem("userRole",res.data.role)

          setUserData(res.data);
          
          console.log("data in navbar", res.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchData();
  }, [id1]);

  const rlb = localStorage.getItem("remainingBalance")
  console.log("remainimg balance",rlb)
  const da = localStorage.getItem("userType1")
  console.log(da);


  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='border-2 w-3/12 flex flex-col gap-5  mx-auto m-16 p-2 rounded-xl text-xl shadow-xl'>
    <h1 className='bg-blue-400 text-center font-extrabold text-3xl rounded-t-xl'>User Profile</h1>
      <p className='px-6'>Name : {userData.email.split("@")[0]}</p>
      <p className='px-6'>Id : {userData.id}</p>
      <p className='px-6'>Department : {userData.department}</p>
      <p className='px-6'>Email : {userData.email}</p>
      <p className='px-6'>Role : {userData.role}</p>    
      <p className='px-6'>Password : {userData.password}</p>
      <p className='px-6'>Leaves alloted : {userData.days}</p>



    </div>
  );
};

export default Profile;

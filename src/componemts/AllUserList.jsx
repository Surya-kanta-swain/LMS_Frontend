import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserList= () => {
  const [users, setUsers] = useState([]);
  const[deleteMsg,setDeleteMsg]=useState("");
  const navigate =useNavigate()
  const role = localStorage.getItem("userRole")


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/users/");
        console.log(response.data);
        localStorage.setItem("jwt", JSON.stringify(response.data)); // Convert data to string
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchUsers();
  }, []);

  const handleUpdate=(employeeId)=>{
    navigate(`/updateUser/${employeeId}`)
  }
  

  const handleDelete = async (employeeId)=>{
    try {
      const response = await axios.delete(`http://localhost:8081/api/users/${employeeId}`)
      console.log(`employee with ${employeeId} has been deleted successfully`)
     setDeleteMsg("User Deleted SuccessFully");
     

    } catch (error) {
      console.log(error)
    }
  }

  const rlb = localStorage.getItem("remainingBalance")
  console.log("remainimg balance",rlb)
  

  return (
    <div className="container mx-auto">
      <table className="table-auto w-full border border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-3 py-2 text-left">ID</th>
            <th className="px-3 py-2 text-left">Email</th>
            <th className="px-3 py-2 text-left">Department</th>
            <th className="px-3 py-2 text-left">Role</th>
            <th className="px-3 py-2 text-left">Days Allotted</th>

            <th className={`${role == "manager" ? "px-3 py-2 text-left":"hidden"}`}>Delete</th>
            <th className={`${role == "manager" ? "px-3 py-2 text-left":"hidden"}`}>Update</th>

            
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="px-3 py-2">{user.id}</td>
              <td className="px-3 py-2">{user.email}</td>
              <td className="px-3 py-2">{user.department ? user.department : 'N/A'}</td>
              <td className="px-3 py-2">{user.role}</td>
              <td className="px-3 py-2">{user.days}</td>

              <td><button className={`${role == "manager" ? 'bg-red-500 border-2 border-white rounded-lg p-1':"hidden"}`} onClick={()=>handleDelete(user.id)}>delete User</button></td>
              <td><button className={`${role == "manager" ? 'bg-blue-500 border-2 border-white rounded-lg p-1':"hidden"}`} onClick={()=>handleUpdate(user.id)}>update User</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {deleteMsg && (  
        <div className="p-4 text-center bg-red-500 text-white mt-4 rounded-lg">
          {deleteMsg}
        </div>
      )}
    </div>
  );
}

export default UserList;
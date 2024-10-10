import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const LeaveHistory = () => {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const navigate =useNavigate()

  const id1 = localStorage.getItem("id1");


  useEffect(() => {
    const fetchLeaveHistory = async () => {
      const response = await axios.get('http://localhost:8081/api/leave/');
const separateBtUserId =response.data.filter((item)=>item.uid == id1)

      setLeaveHistory(separateBtUserId);
      console.log(response.data);
    };

    fetchLeaveHistory();
  }, []);

  const handleDelete = async (leaveId)=>{
    try {
      const response = await axios.delete(`http://localhost:8081/api/leave/${leaveId}`)
      alert(`leave deleted,${leaveId}`)
      console.log(`leave with ${leaveId} has been deleted successfully`)
     
      

    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdate=(leaveId)=>{
    navigate(`/updateLeave/${leaveId}`)
  } 
  console.log()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leave History</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Applied Date</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
            <th className="border border-gray-300 px-4 py-2">Leave Cause</th>
            <th className="border border-gray-300 px-4 py-2">User Id</th>
            <th className="border border-gray-300 px-4 py-2">Leave Type</th>

            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Delete</th>
            <th className="border border-gray-300 px-4 py-2">Update</th>


          </tr>
        </thead>
        <tbody>
          {leaveHistory.map((leave) => (
            <tr key={leave.id} className="border border-gray-300 text-center">
              <td className="border border-gray-300 px-4 py-2 text-center">{leave.id}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{moment(leave.appliedDate).format('YYYY-MM-DD')}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{moment(leave.startDate).format('YYYY-MM-DD')}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{moment(leave.endDate).format('YYYY-MM-DD')}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{leave.leaveCause}</td> 
              <td className="border border-gray-300 px-4 py-2 text-center">{leave.uid}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{leave.leaveType}</td>

              <td className="border border-gray-300 px-4 py-2 text-center">{leave.status}</td>
              <td className="border border-gray-300 px-4 py-2 text-center"><button className={`${leave.status ==="PENDING" ?"border-2 bg-red-500 p-1 px-1.5 ":"hidden"}`} onClick={()=>handleDelete(leave.id)}>Delete</button></td>
              <td className="border border-gray-300 px-4 py-2 text-center"><button className={`${leave.status ==="PENDING" ?"border-2 bg-blue-500 p-1 px-1.5 ":"hidden"}`}  onClick={()=>handleUpdate(leave.id)}>Update</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveHistory;

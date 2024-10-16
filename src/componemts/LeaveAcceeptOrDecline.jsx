import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const LeaveAcceptOrDecline = () => {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const navigate = useNavigate();
  const da = localStorage.getItem("userType1") || '';


  const [formData, setFormData] = useState("");

  useEffect(() => {
    const fetchLeaveHistory = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/leave/');
        console.log("User data"+response.data);
        const authorizable = response.data.filter(el => 
          el.status === "PENDING" && 
          el.departmentName && 
          el.departmentName === da.toString()
      );
      
        setLeaveHistory(authorizable);
        console.log("in leave admin view", response.data);
        console.log("fetch using dept", authorizable);
      } catch (error) {
        console.error("Error fetching leave history:", error);
      }
    };

    fetchLeaveHistory();
  }, [da]); // Added dependency 'da' to useEffect dependency array

  const acceptHandler = async (leaveId) => {
    try {
      const res = await axios.put(`http://localhost:8081/api/leave/approve/${leaveId}`, { adminComment: formData });
      alert(`Leave has been approved.\n Leave ID: ${leaveId}`);
      console.log("Leave approval response:", res);
    } catch (error) {
      console.error("Error approving leave:", error);
    }
  };

  const declineHandler = async (leaveId) => {
    try {
      const res = await axios.put(`http://localhost:8081/api/leave/reject/${leaveId}`, { adminComment: formData });
      alert(`Leave has been declined.\n Leave ID: ${leaveId} `);
      console.log("Leave decline response:", res);
    } catch (error) {
      console.error("Error declining leave:", error);
    }
  };

  const handleChange = (event) => {
    setFormData(event.target.value);
    console.log(formData);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leave Management Admin Side</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Applied Date</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
            <th className="border border-gray-300 px-4 py-2">Leave Cause</th>
            <th className="border border-gray-300 px-4 py-2">Admin Comment</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>

            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveHistory.map((leave) => (
            <tr key={leave.id} className="border border-gray-300">
              <td className="border border-gray-300 px-4 py-2">{leave.id}</td>
              <td className="border border-gray-300 px-4 py-2">{moment(leave.appliedDate).format('YYYY-MM-DD')}</td>
              <td className="border border-gray-300 px-4 py-2">{moment(leave.startDate).format('YYYY-MM-DD')}</td>
              <td className="border border-gray-300 px-4 py-2">{moment(leave.endDate).format('YYYY-MM-DD')}</td>
              <td className="border border-gray-300 px-4 py-2">{leave.leaveCause}</td>
              <td className="border border-gray-300 px-4 py-2">{leave.status}</td>
              <td className=" border-gray-300 px-4 py-2 flex items-center gap-2">
                <textarea
                  className='p-1'
                  id={`adminComment-${leave.id}`}
                  name={`adminComment-${leave.id}`}
                  value={formData}
                  onChange={(event) => handleChange(event)}
                />
                </td>
                <td>
                <button className='border-2 bg-blue-500 p-1 px-1.5' onClick={() => acceptHandler(leave.id)}>Accept</button>
                <button className='border-2 bg-red-500 p-1 px-1.5 ml-2' onClick={() => declineHandler(leave.id)}>Decline</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveAcceptOrDecline;

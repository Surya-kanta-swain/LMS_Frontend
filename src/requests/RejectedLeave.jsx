import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

const RejectedLeave = () => {
  const id1 = localStorage.getItem("id1")
const [leaveRequest,SetLeaveRequest] = useState([])
    useEffect(() => {
        const fetchLeaveHistory = async () => {
          const response = await axios.get('http://localhost:8081/api/leave/');
          const data = response.data;
          const authorizable =data.filter(el => el.status === "reject" && el.uid == id1);
          console.log(authorizable)
          SetLeaveRequest(authorizable)

        };
    
        fetchLeaveHistory();
      }, []);
    
  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Rejected leave</h1>
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">ID</th>
          <th className="border border-gray-300 px-4 py-2">Applied Date</th>
          <th className="border border-gray-300 px-4 py-2">Start Date</th>
          <th className="border border-gray-300 px-4 py-2">End Date</th>
          <th className="border border-gray-300 px-4 py-2">Leave Cause</th>
          <th className="border border-gray-300 px-4 py-2">Leave Type</th>
          <th className="border border-gray-300 px-4 py-2">Admin comment</th>
          <th className="border border-gray-300 px-4 py-2">Status</th>


        </tr>
      </thead>
      <tbody>
        {leaveRequest.map((leave) => (
          <tr key={leave.id} className="border border-gray-300">
            <td className="border border-gray-300 px-4 py-2">{leave.id}</td>
            <td className="border border-gray-300 px-4 py-2">{moment(leave.appliedDate).format('YYYY-MM-DD')}</td>
            <td className="border border-gray-300 px-4 py-2">{moment(leave.startDate).format('YYYY-MM-DD')}</td>
            <td className="border border-gray-300 px-4 py-2">{moment(leave.endDate).format('YYYY-MM-DD')}</td>
            <td className="border border-gray-300 px-4 py-2">{leave.leaveCause}</td>
            <td className="border border-gray-300 px-4 py-2">{leave.leaveType}</td>
            <td className="border border-gray-300 px-4 py-2">{leave.adminComment == null ? "":JSON.parse(leave.adminComment).adminComment}</td>
            <td className="border border-gray-300 px-4 py-2">{leave.status}</td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default RejectedLeave

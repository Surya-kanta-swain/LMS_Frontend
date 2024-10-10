import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Calender from './Calender'; 

const CalenderLeave = () => {
  const id1 = localStorage.getItem("id1");
  const days = parseInt(localStorage.getItem("days")) || 0;

  const [leaveById, setLeaveById] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBal = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/leave/count/${id1}`);
        const data = response.data;
        setBalance(data); 

        if (!isNaN(days) && !isNaN(data)) {
          localStorage.setItem("remainingBalance", days - data); 
        }
      } catch (error) {
        console.error("Error fetching balance", error);
      }
    };
    fetchBal();
  }, [id1, days]);

  useEffect(() => {
    const fetchLeave = async () => {
      try {
        const res = await axios.get("http://localhost:8081/api/leave/");
        const data = res.data;
        
        const leaveList = data.filter(el => el.uid === parseInt(id1) && el.status !== "PENDING");
        const ids = leaveList.map(obj => obj.id);
        setLeaveById(ids);
      } catch (error) {
        console.error("Error fetching leave details", error);
      }
    };
    fetchLeave();
  }, [id1]);

  const remainingLeave = Math.max(0, days - balance);

  return (
    <div>
      <p className="font-bold text-3xl text-center mt-8 mb-5">Your Leave Balance</p>
      <div className="flex items-center justify-center gap-6">
        {/* Remaining Leave Box */}
        <div className="w-52 h-48 border-4 border-blue-600 rounded-xl mx-auto p-3">
          <p className="font-semibold text-3xl">Remaining Leave:</p>
          <p className="font-bold text-4xl text-blue-900 text-center mt-7">{remainingLeave}</p>
        </div>
      </div>
      {/* Render the leave details using the Calender component */}
      {leaveById.map((id) => (
        <div className="my-5" key={id}>
          <div className="text-xl font-mono text-center underline">
            Leave ID: <strong>{id}</strong>
          </div>
          <Calender leaveId={id} />
        </div>
      ))}
    </div>
  );
};

export default CalenderLeave;

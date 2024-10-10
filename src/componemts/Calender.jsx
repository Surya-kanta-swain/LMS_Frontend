import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calender = ({ leaveId }) => {
  const [data, setData] = useState(null);

  const id1 = localStorage.getItem("id1")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/leave/${leaveId}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [leaveId]);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={[
        {
          title: data.status =='approve' ? 'approve' : 'reject',
          start: data.startDate,
          end: data.endDate,
          borderColor: data.status=='approve' ? 'green' : 'red',
          backgroundColor: data.status =='approve' ? 'lightgreen' : 'lightyellow',
          textColor: 'black',
        },
      ]}
    />
  );
};

export default Calender;
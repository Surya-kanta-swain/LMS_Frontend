import React, { useEffect, useState } from 'react';
import './Navbar.css';
import axios from 'axios';

const navItems = [
  { name: "Home", path: "/", roles: ["manager", 'employee'] },
  { name: "Calendar", path: "/calendar", roles: ["employee"] },
  { name: "Leave Management", path: "/leaveMgmt", roles: ["employee"] },
  { name: "User List ", path: "/userList", roles: ["employee", "manager"] },
  { name: "Profile ", path: "/profile", roles: ["employee", "manager"] },
  { name: "Leave Authorize ", path: "/leaveAuthorize", roles: "manager" },
  { name: "User Creation", path: "/postUser", roles: "manager" },
  { name: "Fill Leave form ", path: "/leaveForm", roles: ["employee"] },
  { name: "Approved Leave ", path: "/approved", roles: "employee" },
  { name: "Rejected Leave ", path: "/rejected", roles: "employee" }
];

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("employee");
  const [logoutMessage, setLogoutMessage] = useState("");  
  const id1 = localStorage.getItem("id1");
  const rbl = localStorage.getItem("remainingBalance");
  console.log("remaining bal " + rbl);

  useEffect(() => {
    const fetchData = async () => {
      if (id1) {
        try {
          const res = await axios.get(`http://localhost:8081/api/users/${id1}`);
          console.log("data in navbar", res.data);
          localStorage.setItem("days", res.data.days);
          const data = res.data;
          setUserRole(data.role.toLowerCase());
          setUsername(data.email.split('@')[0].replace(/\d+/g, ''));
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchData();
  }, [id1]);

  const getVisibleItems = (items, role) => items.filter(item => item.roles.includes(role));

  const handleLogout = () => {
    localStorage.clear();
    setLogoutMessage("You have been logged out!");  
  };

  return (
    <>
      <nav className="navbar min-w-full">
        <ul>
          {getVisibleItems(navItems, userRole).map(item => (
            <li key={item.path}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2'>
          {id1 &&
            <button
              className="border-0 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          }
          <a href='profile' className="border-0 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            {username}
          </a>
        </div>
      </nav>

      {logoutMessage && (  
        <div className="p-4 text-center bg-red-500 text-white mt-4 rounded-lg">
          {logoutMessage}
        </div>
      )}
    </>
  );
};

export default Navbar;

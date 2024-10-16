import Navbar from './componemts/Navbar'
import Home from './pages/Home'
import UpdateUser, {} from './componemts/UpdateUser'
import PostUser, {} from './componemts/PostUser'
import {RouterProvider ,createBrowserRouter ,Navigate} from 'react-router-dom';
import UserList from './componemts/AllUserList';
import LeaveForm, {} from './componemts/LeaveForm'
import LeaveHistory from './componemts/AllLeaveList';
import UpdateLeave from './componemts/UpdateLeave';
import LeaveAcceeptOrDecline from './componemts/LeaveAcceeptOrDecline';
import Footer from './componemts/Footer';
import Auth, {} from './pages/Auth'
import Profile from './componemts/Profile';
import AccedpteLeave from './requests/AccedpteLeave';
import RejectedLeave from './requests/RejectedLeave';
import CalenderLeave from './componemts/CalenderLeave';
import LeavePol from './pages/LeavePol';
import EmpHandbook from './pages/EmpHandbook';
import Signin from './componemts/Signin';
import Signup from './componemts/Signup';



const App = () => {

  const router = createBrowserRouter([
    {
      path: '/signin',
      element: <Signin/>,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path:"/",
      element:<Home/>
    }
    ,{
      path:"/userList",
      element:<UserList/>
    },
    {
      path:"/postUser",
      element:<PostUser/>
    },
    {
      path:"/updateUser/:id",
      element:<UpdateUser/>
    },
    {
      path:"/leaveForm",
      element:<LeaveForm/>
    },
    {
      path:"/leaveMgmt",
      element:<LeaveHistory/>
    },
    {
      path:"/updateLeave/:id",
      element:<UpdateLeave/>
    },
    {
      path:"/leaveAuthorize",
      element:<LeaveAcceeptOrDecline/>
    },
    {
      path:"/profile",
      element:<Profile/>
    },
    {
      path:"/approved",
      element:<AccedpteLeave/>
    },
    {
      path:"/rejected",
      element:<RejectedLeave/>
    },
    {
      path:"/calendar",
      element:<CalenderLeave/>
    },
    {
      path:"/leavepol",
      element:<LeavePol/>
    },
    {
      path:"/handbook",
      element:<EmpHandbook/>
    }

  ])


  const id1 = localStorage.getItem("id1")
 console.log( "in app.jsx page id1",id1)

  return (<>
    {id1 ? (
      <>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </>
    ) : (
      <Auth />
    )}
    </>
  );

};

export default App;

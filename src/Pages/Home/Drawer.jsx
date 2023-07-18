import React from 'react';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import Houses from './Houses';
import Navbar from './Navbar';
import useUser from '../useUser';

const Drawer = () => {
  const [users]=useUser([])
  // const role=users?.data?.data?.role
  console.log(users)
  
    return (
        <div className='container'>
            <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content mx-auto">
    {/* Page content here */}
        <Navbar></Navbar>
        <Filters></Filters>
        <Houses></Houses>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}

       <li><Link to='/myBookings'>My bookings</Link></li>
      <li><Link to='/manageBookings'>Manage Bookings</Link></li>
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default Drawer;
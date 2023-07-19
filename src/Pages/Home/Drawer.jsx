import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import Houses from './Houses';
import Navbar from './Navbar';


const Drawer = () => {
  const [users,setUsers]=useState()

  useEffect(()=>{
    fetch('http://localhost:5000/api/v1/users')
    .then(res=>res.json())
    .then(data=>setUsers(data.users))
},[])
const selectedUser = users && users.slice(-1)
const selectedEmail = users && users.slice(-1)[0].email
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


      {(users&& selectedUser[0].role==='renter')?
       <div>
      <li><Link to='/myBookings'>My bookings</Link></li>
      <li><Link to='/manageBookings'>Manage Bookings</Link></li>
      </div>
      :
      <div>
         <li><Link to={`/myhouses/${selectedEmail}`}>My Houses</Link></li>
      <li><Link to={`/manageHouses/${selectedEmail}`}>Manage Houses</Link></li>
        </div>
     }
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default Drawer;
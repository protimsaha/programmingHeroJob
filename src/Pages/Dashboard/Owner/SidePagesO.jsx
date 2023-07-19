import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SidePagesO = () => {
    const [users,setUsers]=useState()

  useEffect(()=>{
    fetch('http://localhost:5000/api/v1/users')
    .then(res=>res.json())
    .then(data=>setUsers(data.users))
},[])
// const selectedUser = users && users.slice(-1)
const selectedEmail = users && users.slice(-1)[0].email
    return (
        <div className='left-0 px-6 mb-10'>
        <Link to='/' className='font-bold text-pink-400 text-[25px]'>HouseHunter</Link>
       <ul className='flex flex-col gap-y-5'>
           <Link to={`/myhouses/${selectedEmail}`}>My Houses</Link>
           <Link to={`/manageHouses/${selectedEmail}`}>Manage Houses</Link>                 
       </ul>
   </div>
    );
};

export default SidePagesO;
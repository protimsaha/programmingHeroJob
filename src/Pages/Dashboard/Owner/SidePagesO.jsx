import React from 'react';
import { Link } from 'react-router-dom';

const SidePagesO = () => {
    return (
        <div className='left-0 px-6 mb-10'>
        <Link to='/' className='font-bold text-pink-400 text-[25px]'>HouseHunter</Link>
       <ul className='flex flex-col gap-y-5'>
           <Link to='/myhouses'>My Houses</Link>
           <Link to='/manageHouses'>Manage Houses</Link>                 
       </ul>
   </div>
    );
};

export default SidePagesO;
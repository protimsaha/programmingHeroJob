import React from 'react';
import { Link } from 'react-router-dom';

const SidePage = () => {
    return (
        <div className='left-0 px-6 mb-10'>
             <Link to='/' className='font-bold text-pink-400 text-[25px]'>HouseHunter</Link>
            <ul className='flex flex-col gap-y-5'>
                <Link to='/myBookings'>My Bookings</Link>
                <Link to='/manageBookings'>Manage bookings</Link>                 
            </ul>
        </div>
    );
};

export default SidePage;
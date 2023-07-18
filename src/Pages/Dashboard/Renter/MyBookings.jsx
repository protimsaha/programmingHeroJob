import React from 'react';
import SidePage from '../SidePage';

const MyBookings = () => {
    return (
        <div className='flex justify-between'>
            <SidePage></SidePage>
            <div className='mx-auto'>
            <h2>My bookings</h2>
            </div>
        </div>
    );
};

export default MyBookings;
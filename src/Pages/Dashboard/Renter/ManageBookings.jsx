import React from 'react';
import SidePage from '../SidePage';

const ManageBookings = () => {
    return (
        <div>
            <div className='flex justify-between'>
            <SidePage></SidePage>
            <div className='mx-auto'>
            <h2>Manage bookings</h2>
            </div>
        </div>
        </div>
    );
};

export default ManageBookings;
import React from 'react';
import SidePage from '../SidePage';
import { useParams } from 'react-router-dom';

const MyBookings = () => {
    const {email}=useParams()
    console.log(email)
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
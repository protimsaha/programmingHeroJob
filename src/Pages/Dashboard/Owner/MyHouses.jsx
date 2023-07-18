import React, { useEffect, useState } from 'react';
import SidePagesO from './SidePagesO';
import {  Link, useParams } from 'react-router-dom';

const MyHouses = () => {

    const {email}=useParams()

    // const [user]=useUser()

    const [houses,setHouses]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/houses/${email}`) 
        .then(res=>res.json())
        .then(data=>setHouses(data))
    },[email])
    console.log(houses.length)
    return (
     
        <div className='flex justify-between'>
            <SidePagesO></SidePagesO>
            <div className='mx-auto'>
            <h2 className='text-xl font-semibold text-gray-800'>My Houses</h2>
               {houses.length===0 && <h2 className='text-lg font-semibold text-gray-800 my-10'>No houses added yet. Add some!</h2>}

               <Link to='/addHouse' className="btn btn-primary">Add houses</Link>

            </div>
        </div>
    );
}; 

export default MyHouses;
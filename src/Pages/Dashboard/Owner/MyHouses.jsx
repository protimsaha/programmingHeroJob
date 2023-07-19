import React, { useEffect, useState } from 'react';
import SidePagesO from './SidePagesO';
import {  Link, useParams } from 'react-router-dom';
import House from '../../Home/House';

const MyHouses = () => {

    const {email}=useParams()

    const [houses,setHouses]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/houses/${email}`) 
        .then(res=>res.json())
        .then(data=>setHouses(data))
    },[email])
    return (
     
        <div className='flex justify-between'>
            <SidePagesO></SidePagesO>
            <div className='mx-auto'>
            <h2 className='text-xl font-semibold text-gray-800'>My Houses</h2>
               {houses.length===0 ? <h2 className='text-lg font-semibold text-gray-800 my-10'>No houses added yet. Add some!</h2>:<div>
                {houses.map(h=><House h={h} key={h._id}></House>)}
                </div>}

               <Link to={`/addHouse/${email}`} className="btn btn-primary mt-10">Add houses</Link>

            </div>
        </div>
    );
}; 

export default MyHouses;
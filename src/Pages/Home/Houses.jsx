import React, { useEffect, useState } from 'react';
import House from './House';

const Houses = () => {
    const [houses,setHouses]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/api/v1/houses')
        .then(res=>res.json())
        .then(data=>setHouses(data.houses))
    },[])
    return (
        <div className='mt-12 grid grid-cols-12 gap-y-16'>
            {houses.map(h=>
                <House key={h._id} h={h}></House>)}
        </div>
    );
};

export default Houses;
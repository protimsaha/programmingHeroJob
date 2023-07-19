import React, { useEffect, useState } from 'react';
import SidePagesO from './SidePagesO';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ManageHouses = () => {
    const {email}=useParams()
    console.log(email)

    const [houses,setHouses]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/houses/${email}`) 
        .then(res=>res.json())
        .then(data=>setHouses(data))
    },[email,houses])

    const deleteHouse =(id)=>{
        axios.delete(`http://localhost:5000/api/v1/houses/${id}`)
        .then(res=>console.log(res))
    }

    return (
        <div className='flex justify-between'>
        <SidePagesO></SidePagesO>
        <div className='mx-auto'>
        <h2 className='text-xl font-semibold text-gray-800'>This is manage houses</h2>

        <div className="overflow-x-auto  mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Rent</th>
        <th>Address</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        houses.map((h,index)=> <tr key={h._id}>
            <th>{index+1}</th>
            <td>{h?.name}</td>
            <td>{h?.rent}</td>
            <td>{h?.address}</td>
            <td><Link to={`/updateHouse/${h._id}`} className="btn btn-primary ">Edit</Link></td>
            <td><button onClick={()=>deleteHouse(h?._id)} className="btn bg-red-500">Delete</button></td>
          </tr>)
     }
     
      
    </tbody>
  </table>
</div>
        </div>
    </div>
    );
};

export default ManageHouses;
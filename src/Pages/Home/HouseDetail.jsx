import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { toast } from 'react-toastify';
// import axios from 'axios';

const HouseDetail = () => {
    const {id} = useParams()
    const [detail,setDetail]= useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/house/${id}`)
        .then(res=>res.json())
        .then(data=>setDetail(data[0]))
    },[id])

    // const addbooking =(id)=>{
    //   axios.post(`http://localhost:5000/api/v1/house/${id}`)
    // }

    return (
        <div className='xl:px-10 container '>
            <Navbar></Navbar>
           
            <div className="card card-compact w-3/4 mx-auto mt-14 bg-base-100 shadow-xl">
  <figure><img className='w-[70%]' src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="Shoes" /></figure>
  <div className=" p-11">
    <h2 className="card-title text-2xl text-sky-800 font-bold">{detail.name}</h2>
    <p className='text-start text-base'>{detail.desc}</p>
    <h3 className='text-gray-800 font-semibold text-lg text-start'>Address: {detail.address}</h3>
    <h3 className='text-gray-800 font-semibold text-lg text-start'>Room Size: {detail.roomSize}</h3>
    <h3 className='text-gray-800 font-semibold text-lg text-start'>Number of Bedroom: {detail.bedrooms}</h3>
    <h3 className='text-gray-800 font-semibold text-lg text-start'>Number of Bathroom: {detail.bathrooms}</h3>
    <h3 className='text-gray-800 font-semibold text-lg text-start'>Phone number: {detail.phoneNumber}</h3>
   
    <div className="flex justify-between mt-10">
        <h2 className='text-lg text-gray-800 font-semibold'>Rent per month: <span className='text-pink-500'>{detail.rent} bdt</span> </h2>
      <button onClick={()=>toast.success('Booked')} className="btn btn-primary">Book Now</button>

    </div>
  </div>
</div>
        </div>
    );
};

export default HouseDetail;
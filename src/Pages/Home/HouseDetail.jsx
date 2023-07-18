import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const HouseDetail = () => {
    const {id} = useParams()
    const [detail,setDetail]= useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/houses/${id}`)
        .then(res=>res.json())
        .then(data=>setDetail(data))
    },[id])
//   const toastOn=()=>{n  
//     window.my_modal_1.showModal()
//     showModal('my_modal_1')
//   }
//   const showModal=()=>{

//   }
// const {name}=detail

    return (
        <div className='xl:px-10 container '>
            <Navbar></Navbar>
           
            <div className="card card-compact w-3/4 mx-auto mt-14 bg-base-100 shadow-xl">
  <figure><img className='w-[70%]' src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="Shoes" /></figure>
  <div className=" p-11">
    <h2 className="card-title">{detail.name}</h2>
    {/* <h2>{detail}</h2> */}
    <p className='text-start text-base'>If a dog chews shoes whose shoes does he choose?</p>
    <h3 className='text-gray-800 font-semibold text-lg text-start'>{detail.address}</h3>
    <h3 className='text-gray-800 font-semibold text-lg text-start'>Room Size: {detail.roomSize}</h3>
    <h3 className='text-gray-800 font-semibold text-lg text-start'>Number of Bedroom:{detail.bedroom}</h3>
    <h3 className='text-gray-800 font-semibold text-lg text-start'>Number of Bathroom:</h3>
    <h3 className='text-gray-800 font-semibold text-lg text-start'>Available date:</h3>
    <h3 className='text-gray-800 font-semibold text-lg text-start'>Phone number:</h3>
   
    <div className="flex justify-between mt-10">
        <h2 className='text-lg text-gray-800 font-semibold'>Rent per month: <span className='text-pink-500'>{detail.rent} bdt</span> </h2>
      <button className="btn btn-primary">Book Now</button>

    </div>
  </div>
</div>
        </div>
    );
};

export default HouseDetail;
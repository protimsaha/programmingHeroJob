import axios from 'axios';
import React, { useState } from 'react';

const AddHouse = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [rent,setRent]=useState(0)
    const [address,setAddress]=useState('')
    const [city,setCity]=useState('')
    const [bedrooms,setBedrooms]=useState(0)
    const [bathrooms,setBathrooms]=useState(0)
    const [roomsize,setRoomsize]=useState(0)
    const [image,setImage]= useState({})
    const [phonenumber,setPhonenumber]=useState(0)
    const [description,setDescription]=useState('')

    const imageHostKey = '02ac56fd7f18d837b23894d27b8c36fb'

    const hostImage = (e)=>{
        e.preventDefault()
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=02ac56fd7f18d837b23894d27b8c36fb`
        fetch(url,{
            method:'POST',
            body:image
        })
        .then(res=>res.json())
        .then(imgData=>console.log(imgData))
        // axios.post(url,image)
        // .then(res=>res.json())
        // .then(imgData=>{
        //     console.log(imgData)
        // })
    }

    const houseData = (e)=>{
        e.preventDefault()

        

        const addData={
            name:name,
            email:email,
            rent:rent,
            address:address,
            city:city,
            bedrooms:bedrooms,
            bathrooms:bathrooms,
            roomsize:roomsize,
            // image:image,
            phonenumber:phonenumber,
            description:description
        }
        // console.log(addData)
    }
    return (
        <div className='mb-10'>
            <h2>Add Your House</h2>

            <form onSubmit={hostImage} className='w-[45%] mx-auto mt-14 shadow-md rounded-lg p-7 '>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setRent(e.target.value)}} type="number" placeholder="Rent" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setAddress(e.target.value)}} type="text" placeholder="Address" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setCity(e.target.value)}} type="text" placeholder="City" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setBedrooms(e.target.value)}} type="number" placeholder="Bedrooms" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setBathrooms(e.target.value)}} type="number" placeholder="Bathrooms" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setRoomsize(e.target.value)}} type="number" placeholder="Room Size" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setImage(e.target.files[0])}} type="file" placeholder="Image" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setPhonenumber(e.target.value)}} type="text" placeholder="Phone number" className="input input-bordered w-full max-w-xs my-3"  required/>
            <div className='flex flex-col mx-auto items-center'>
            <textarea onChange={(e)=>{setDescription(e.target.value)}} name="description" placeholder='Description' cols="3" rows="10" className="input input-bordered w-full max-w-xs my-3" ></textarea>
            <button  className='btn btn-primary mx-auto'>Add house</button>
            </div>
            </form>

        </div>
    );
};

export default AddHouse;
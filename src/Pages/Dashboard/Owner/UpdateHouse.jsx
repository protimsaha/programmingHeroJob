import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateHouse = () => {
    const {id} = useParams()
    const [detail,setDetail]= useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/house/${id}`)
        .then(res=>res.json())
        .then(data=>setDetail(data[0]))
    },[id])


    const [rent,setRent]=useState(0)
    const [address,setAddress]=useState('')
    const [city,setCity]=useState('')
    const [bedrooms,setBedrooms]=useState(0)
    const [bathrooms,setBathrooms]=useState(0)
    const [roomsize,setRoomsize]=useState(0)
    const [phonenumber,setPhonenumber]=useState(0)
    const [description,setDescription]=useState('')

    const imageHostKey = '02ac56fd7f18d837b23894d27b8c36fb'

   const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data=>{
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData=>{
               const imageUrl=imgData.data.url
               const addData={
                name:detail.name,
                email:detail.email,
                rent:Number(rent),
                address:address,
                city:city,
                bedrooms:Number(bedrooms),
                bathrooms:Number(bathrooms),
                roomSize:Number(roomsize),
                image:imageUrl,
                phoneNumber:phonenumber,
                desc:description
            }
            // console.log(addData)
            axios.patch(`http://localhost:5000/api/v1/houses/${detail._id}`,addData)
            .then(res=>{
               if(res.status===200){
                navigate(`/ManageHouses/${detail.email}`)
               }
            })

            })

          
    }

    return (
        <div className='mb-10'>
            <h2 className='text-xl font-semibold text-gray-800'>Update Your House Data</h2>

            <form onSubmit={handleSubmit(onSubmit)} className='w-[45%] mx-auto mt-14 shadow-md rounded-lg p-7 '>
              
            <input disabled value={detail.name} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input disabled value={detail.email} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setRent(e.target.value)}} type="number" placeholder="Rent" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setAddress(e.target.value)}} type="text" placeholder="Address" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setCity(e.target.value)}} type="text" placeholder="City" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setBedrooms(e.target.value)}} type="number" placeholder="Bedrooms" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setBathrooms(e.target.value)}} type="number" placeholder="Bathrooms" className="input input-bordered w-full max-w-xs my-3"  required/>
            <input onChange={(e)=>{setRoomsize(e.target.value)}} type="number" placeholder="Room Size" className="input input-bordered w-full max-w-xs my-3"  required/>
           
            <div className="mx-auto form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Image</span>
                    </label>
                    <input
                        type="file"
                        className="input  w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

            <input onChange={(e)=>{setPhonenumber(e.target.value)}} type="text" placeholder="Phone number" className="input input-bordered w-full max-w-xs my-3"  required/>
            <div className='flex flex-col mx-auto items-center'>
            <textarea onChange={(e)=>{setDescription(e.target.value)}} name="description" placeholder='Description' cols="3" rows="10" className="input input-bordered w-full max-w-xs my-3" ></textarea>
            <button  className='btn btn-primary mx-auto'>Add house</button>
            </div>
            </form>

        </div>
    );
};

export default UpdateHouse;
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phoneNumber,setPhoneNumber]=useState([])
    const [role,setRole]=useState('owner')
    const [password,setPassword]=useState('')
    const [cPassword,setCPassword]=useState('')
    const [errorMessage,setErrorMessage]=useState('')


    const navigate=useNavigate()

    const submitData=(e)=>{
        e.preventDefault()
        if(password === cPassword){
         setPassword(password)
        }
        else{
           return setErrorMessage('Password and Confirm Password are not same')
        }
        const num=phoneNumber.slice(1,3)
        if(Number(num)===13){
            setPhoneNumber(phoneNumber)
            setErrorMessage('')
        }else if(Number(num)===14){
            setPhoneNumber(phoneNumber)
            setErrorMessage('')
        }
        else if(Number(num)===15){
            setPhoneNumber(phoneNumber)
            setErrorMessage('')
        }else if(Number(num)===16){
            setPhoneNumber(phoneNumber)
            setErrorMessage('')
        }else if(Number(num)===17){
            setPhoneNumber(phoneNumber)
            setErrorMessage('')
        }else if(Number(num)===18){
            setPhoneNumber(phoneNumber)
            setErrorMessage('')
        }else if(Number(num)===19){
            setPhoneNumber(phoneNumber)
            setErrorMessage('')
        }else{
            setErrorMessage('We accept only Bangladeshi number')
        }
        
        const userData = {
            name: name,
            email: email,
            phoneNumber:phoneNumber,
            password: password,
            role: role
        }
        axios.post('http://localhost:5000/api/v1/user/signup',userData)
        .then(res=>{
            // setUsers(res?.data?.data)
            if(res.data.data.role==='owner'){              
                navigate(`/myhouses/${res.data.data.email}`)
                // return setUser(res?.data?.data)
            }else if(res.data.data.role==='renter'){              
                navigate(`/myBookings/${res.data.data.email}`)
                // return setUser(res?.data?.data)
            }
        })
    }
    
    return (
        <form onSubmit={(e)=>submitData(e)} className='w-[45%] mx-auto mt-14 shadow-md rounded-lg p-7 '>
                <h2 className='text-gray-800 font-bold text-xl'>Please Sign Up</h2>
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs my-3"  required/>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs my-3"  required/>
                <input value={ phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="number" placeholder="Phone number" className="input input-bordered w-full max-w-xs my-3"  required/>
                {( !phoneNumber) &&   <p className='text-xs text-red-500 font-semibold'>{errorMessage}</p>}
                <div className='flex justify-between max-w-xs mx-auto border rounded-[100px] p-3 my-3'>
                <p>Role</p>
                <select onChange={(e)=>setRole(e.target.value)} className='w-1/2 bg-transparent' required>
                    <option value="owner">Owner</option>
                    <option value="renter">Renter</option>
                </select>
                </div>
                <input onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-3"  required autoComplete='off'/>
                <input onChange={(e)=>setCPassword(e.target.value)} type="password" placeholder="Confirm password" className="input input-bordered w-full max-w-xs my-3" autoComplete='off' required/>
             {(password!==cPassword) &&  <p className='text-xs text-red-500 font-semibold'>{errorMessage}</p>}
                <br />

                <p className='text-xs my-2 font-semibold'>Already have an account? <Link className='underline text-blue-500' to='/signin'>Please signin</Link></p>
                <button  className='btn btn-primary w-2/5'>Signup</button>
        </form>
    );
};

export default SignUp;
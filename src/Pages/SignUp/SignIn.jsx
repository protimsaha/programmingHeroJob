import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phoneNumber,setPhoneNumber]=useState(0)
    const [role,setRole]=useState('')
    const [password,setPassword]=useState('')
    const [cPassword,setCPassword]=useState('')
    const [errorMessage,setErrorMessage]=useState('')

    const submitData=(e)=>{
        e.preventDefault()
        if(password === cPassword){
         setPassword(password)
         console.log(password)
        }
        else{
         return setErrorMessage('Password and Confirm Password are not same')
        }
        
    }

    return (
        <form onSubmit={(e)=>submitData(e)} className='w-[45%] mx-auto mt-14 shadow-md rounded-lg p-7 '>
        <h2 className='text-gray-800 font-bold text-xl'>Please Sign In</h2>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs my-3"  required/>
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs my-3"  required/>
        <input onChange={(e)=>setPhoneNumber(e.target.value)} type="number" placeholder="Phone number" className="input input-bordered w-full max-w-xs my-3"  required/>
        <div className='flex justify-between max-w-xs mx-auto border rounded-[100px] p-3 my-3'>
        <p>Role</p>
        <select onChange={(e)=>setRole(e.target.value)} className='w-1/2 bg-transparent' required>
            <option value="owner">Owner</option>
            <option value="renter">Renter</option>
        </select>
        </div>
        <input onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-3"  required autocomplete='off'/>
        <input onChange={(e)=>setCPassword(e.target.value)} type="password" placeholder="Confirm password" className="input input-bordered w-full max-w-xs my-3" autocomplete='off' required/>
     {errorMessage &&   <p className='text-xs text-red-500 font-semibold'>{errorMessage}</p>}
        <br />

        <p className='text-xs my-2 font-semibold'>Already have an account? <Link className='underline text-blue-500' to='/signup'>Please signup</Link></p>
        <button  className='btn btn-primary w-2/5'>Signin</button>
</form>
    );
};

export default SignIn;
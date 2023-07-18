import React from 'react';
import {  useNavigate } from 'react-router-dom';

const House = ({h}) => {
    const navigate = useNavigate()

    const {name,_id}=h
    return (
        
            <div className="card card-compact w-96 bg-base-100 shadow-xl col-span-6 mx-auto ">
  <figure><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button onClick={()=>navigate(`/${_id}`)}  className="btn btn-primary">See Details</button>
    </div>
  </div>
</div>
        
    );
};

export default House;
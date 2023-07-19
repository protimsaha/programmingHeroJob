import React from 'react';
import {  useNavigate } from 'react-router-dom';

const House = ({h}) => {
    const navigate = useNavigate()

    const {name,image,desc,_id}=h
    return (
        
            <div className="card card-compact w-[65%] bg-base-100 shadow-xl col-span-6 mx-auto mt-14">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{desc}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>navigate(`/${_id}`)}  className="btn btn-primary">See Details</button>
    </div>
  </div>
</div>
        
    );
};

export default House;
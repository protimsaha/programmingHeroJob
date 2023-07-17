import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const {id} = useParams()
    const [detail,setDetails]=useState({})

  useEffect(()=>{
    fetch(`http://localhost:5000/api/v1/users/${id}`)
    .then(res=>res.json())
    .then(data=>setDetails(data[0]))
  },[id])

    return (
        <div>
            <h2>User name: {detail.name}</h2>
            <h5>Age: {detail.age}</h5>
            <h5>Country: {detail.country}</h5>

        </div>
    );
}

export default UserDetail;

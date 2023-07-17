import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserHome = () => {

    const navigate = useNavigate()

    const [users,setUsers]=useState([])

   useEffect(()=>{
    fetch('http://localhost:5000/api/v1/users')
    .then(res=>res.json())
    .then(data=>setUsers(data.users))
   },[])

    return (

        
        <div>
            <h2>Learn about useEffct</h2>
      <p>Number of users in our database:<span style={{fontSize:'20px',fontWeight:'bold',color:'orangered'}}> {users.length}</span> </p>

        <h2>Users information</h2>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        {users.map(u=><div key={u._id} style={{border:'2px solid green',margin:'30px',padding:'30px',width:'200px',alignContent:'center',}}>
          <h3>Name:  {u.name}</h3>

          <button onClick={()=>navigate(`/details/${u._id}`)} style={{backgroundColor:'gray',padding:'6px',color:'white',borderRadius:'4px'}}>See details</button>
      </div>
      )}
        </div>
      
        </div>
    );
}

export default UserHome;

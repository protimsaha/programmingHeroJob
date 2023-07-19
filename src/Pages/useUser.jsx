import  {useEffect,  useState } from 'react';

const useUser = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/api/v1/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    return [user,setUser];
};

export default useUser;
import  {  useState } from 'react';

const useUser = () => {
    const [users,setUsers]=useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/api/v1/users')
    //     .then(res=>res.json())
    //     .then(data=>setUsers(data.houses))
    // },[])

    return [users,setUsers];
};

export default useUser;
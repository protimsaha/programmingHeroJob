import React, { useState } from 'react';
import SignUp from './SignUp/SignUp';
import Drawer from './Home/Drawer';

const Data = () => {
    const [user,setUser]=useState({})
    return (
        <div>
            <SignUp setUser={setUser}></SignUp>
            <Drawer user={user}></Drawer>
        </div>
    );
};

export default Data;
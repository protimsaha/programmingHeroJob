import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HouseDetail from './Pages/Home/HouseDetail';
import Drawer from './Pages/Home/Drawer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignUp/SignIn';
import MyBookings from './Pages/Dashboard/Renter/MyBookings';
import ManageBookings from './Pages/Dashboard/Renter/ManageBookings';
import MyHouses from './Pages/Dashboard/Owner/MyHouses';
import ManageHouses from './Pages/Dashboard/Owner/ManageHouses';
import AddHouse from './Pages/Dashboard/Owner/AddHouse';
import UpdateHouse from './Pages/Dashboard/Owner/UpdateHouse';

function App() {
  
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Drawer></Drawer>}></Route>
        <Route path='/myhouses/:email' element={<MyHouses></MyHouses>}></Route>
        <Route path='/myBookings' element={<MyBookings></MyBookings>}></Route>   
        <Route path='/manageBookings' element={<ManageBookings></ManageBookings>}></Route> 
        <Route path='/manageHouses/:email' element={<ManageHouses></ManageHouses>}></Route>   
        <Route path='/addHouse/:email' element={<AddHouse></AddHouse>}></Route>
        <Route path='/updateHouse/:id' element={<UpdateHouse></UpdateHouse>}></Route>
       <Route path='/:id' element={<HouseDetail></HouseDetail>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

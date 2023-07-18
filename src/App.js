import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HouseDetail from './Pages/Home/HouseDetail';
import Drawer from './Pages/Home/Drawer';
import { ToastContainer } from 'react-toastify';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignUp/SignIn';
import MyBookings from './Pages/Dashboard/Renter/MyBookings';
import ManageBookings from './Pages/Dashboard/Renter/ManageBookings';
import MyHouses from './Pages/Dashboard/Owner/MyHouses';

function App() {
  
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Routes>
       <Route path='/' element={<Drawer></Drawer>}>
       </Route>
        <Route path='/myhouses' element={<MyHouses></MyHouses>}></Route>
        <Route path='/myBookings' element={<MyBookings></MyBookings>}></Route>   
        <Route path='/manageBookings' element={<ManageBookings></ManageBookings>}></Route>    
       <Route path='/:id' element={<HouseDetail></HouseDetail>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;

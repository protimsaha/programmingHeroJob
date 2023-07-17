import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserHome from './UserHome';
import UserDetail from './UserDetail';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserHome></UserHome>}></Route>
        <Route path='/details/:id' element={<UserDetail></UserDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import {   Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './pages/Dashboard';
import SignUp from './components/SignUp';



const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    
  );
};

export default App;

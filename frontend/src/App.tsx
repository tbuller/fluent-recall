import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Signup from './components/Signup';
import MyHome from './components/MyHome';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {

  const navigate = useNavigate();

  return (
      <Routes>
        <Route path="/" element={<Landing navigate={navigate} />} />
        <Route path="/signup" element={<Signup navigate={navigate} />} />
        <Route path="myhome" element={<MyHome navigate={navigate} />} />
      </Routes>
  );
}

export default App;

import React from 'react';
import './App.css';
import Signup from './components/Signup';
import Landing from './components/Landing';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {

  const navigate = useNavigate();

  return (
      <Routes>
        <Route path="/" element={<Landing navigate={navigate} />} />
        <Route path="/signup" element={<Signup navigate={navigate} />} />
      </Routes>
  );
}

export default App;

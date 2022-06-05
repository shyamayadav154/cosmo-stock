
import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleStock from './components/SingleStock/SingleStock';

const apiKey = '3FR39AG8VJR9IQQP';

function App() {
  
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':symbol' element={<SingleStock />} />
      </Routes>
     
    </div>
  );
}

export default App;

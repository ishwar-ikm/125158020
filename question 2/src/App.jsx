import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Category from './components/Category';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:company' element={<Category />} />
      </Routes>
    </>
  );
}

export default App;

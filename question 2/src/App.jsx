import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import Products from './components/Products';
import Item from './components/Item';

function App() {
  return (
    <div className='p-10'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:company' element={<Category />} />
        <Route path='/:company/:category' element={<Products />} />
        <Route path='/product/:id' element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;

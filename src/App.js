import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Sidebar from '../src/components/Sidebar'
import Hero from './components/Hero';

const App = () => {
  return <div className='overflow-hidden'>
     <Header/>
     
   
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/product/:id' element={<ProductDetails/>}/>
       
    </Routes>
    </BrowserRouter>
    <Sidebar/>
    <Footer/>

    
   
    
    </div>;
};

export default App;

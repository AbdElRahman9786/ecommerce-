import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../rtk/slices/productdetails-slice';
import {fetchproductsdetails} from '../rtk/slices/sidebar-slice'

import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  
 
  const {id}=useParams();
const dispatch=useDispatch();
useEffect(()=>{
  dispatch(fetchproducts(id))
},[])
const state=useSelector(state=>state.productdetails)
console.log(state);


  return <div className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
   
   <div className='container mx-auto'>
    {state.map((item)=>{return(
<div className='flex flex-col lg:flex-row items-center'>
  <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'><img className='max-w-[200px] lg:max-w-sm' src={item.image} alt='prod/img'/></div>
  <div className='flex-1 text-center lg:text-left '>
    <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{item.title}</h1>
    <div className='text-xl text-red-500 font-medium mb-6 '>${item.price}</div>
    <p className='mb-8'>{item.description}</p>
    <button onClick={()=>dispatch(fetchproductsdetails(id))} className='bg-primary py-4 px-8 text-white'>Add to cart</button>
  </div>
  

  </div>
  )})}
  
  </div>
  </div>;
};

export default ProductDetails;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";
import {FiTrash2} from 'react-icons/fi'
import Cartitem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { opencart } from '../rtk/slices/opencart-slice';
import { clearcart } from '../rtk/slices/sidebar-slice';

const Sidebar = () => {
const state1=useSelector(state=>state.cart)
const dispatch=useDispatch();
const state=useSelector(state=>state.sidebarproducts)



  return (
    <>
    <div className={`${state1?'right-0':'-right-full'} w-[45%]  bg-white fixed top-0 h-full z-20 shadow-2xl transition-all duration-300 px-4  overflow-y-scroll`}>
<div className='flex items-center justify-between py-6 border-b'>
  <div className='uppercase text-sm font-semibold'>shooping Bag ({state.length})</div>
  <div className='cursor-pointer w-8 h-8 flex items-center justify-center' onClick={()=>dispatch(opencart())}><IoMdArrowForward className='text-2xl'/></div>
</div>
<div className='  flex flex-col gap-y-2'>
  {state.map((item) =>{return(
   <Cartitem key={item.id} item={item}/>
  )})}
</div>
<div className=''>
  <div className=' flex items-center justify-between '>
    <div>Total:<span>1000</span></div>
    <div className='w-12 h-12 bg-red-500 flex items-center justify-center text-xl cursor-pointer '><FiTrash2 onClick={()=>{dispatch(clearcart())}}/></div>
  </div>
</div>
<Link to={'/'} className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium '>Viwe Cart</Link>
<Link to={'/'} className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>CheckOut</Link>
    </div>
    </>
  )
};

export default Sidebar;

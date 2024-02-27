import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";
import {FiTrash2} from 'react-icons/fi'
import Cartitem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { opencart } from '../rtk/slices/opencart-slice';

const Sidebar = () => {
const state1=useSelector(state=>state.cart)
const dispatch=useDispatch();
const state=useSelector(state=>state.sidebarproducts)
console.log(state)

  return (
    <>
    <div className={`${state1?'right-0':'-right-full'} w-[45%] sm:w-[90%] bg-white fixed top-0 h-full z-20 shadow-2xl transition-all duration-300 px-4 `}>
<div className='flex items-center justify-between py-6 border-b'>
  <div className='uppercase text-sm font-semibold'>shooping Bag (0)</div>
  <div className='cursor-pointer w-8 h-8 flex items-center justify-center' onClick={()=>dispatch(opencart())}><IoMdArrowForward className='text-2xl'/></div>
</div>
<div>
  {state.map((item) =>{return(
   <Cartitem key={item.id} item={item}/>
  )})}
</div>
    </div>
    </>
  )
};

export default Sidebar;

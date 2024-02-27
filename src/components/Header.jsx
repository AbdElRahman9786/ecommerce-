import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { opencart } from '../rtk/slices/opencart-slice';
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const state=useSelector(state=>state.cart)
console.log(state);
const dispatch=useDispatch();
  return(
    <>
    <div className='bg-pink-200'>
    <div>Header</div>
    <div onClick={()=>dispatch(opencart())}><BsBag className='text-2xl cursor-pointer flex relative'/></div>
    </div>
    </>
    
    );
};

export default Header;

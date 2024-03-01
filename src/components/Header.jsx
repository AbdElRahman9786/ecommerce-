import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { opencart } from '../rtk/slices/opencart-slice';
import {BsBag} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'

const Header = () => {
  const state=useSelector(state=>state.cart)
const state2=useSelector(state=>state.sidebarproducts);

const dispatch=useDispatch();
  return(
    <>
    <div className=' flex px-4 justify-between items-center '>
    <Hero/>
      <div className='w-[40px]'>
      
      </div>

    <div onClick={()=>dispatch(opencart())}><BsBag className='text-2xl cursor-pointer flex relative'/></div>
    {/* <div className='bg-red-500 absolute left-6 top-10  text-[12px] w-[18px] h-[18px] text-white rounded-full flex items-center justify-center'>

{state2.length}
    </div> */}
    </div>
    </>
    
    );
};

export default Header;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { opencart } from '../rtk/slices/opencart-slice';
import {BsBag} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'
import Logo from '../img/logo.svg'

const Header = () => {
  const [isactive,setisactive]=useState(false);
  const state=useSelector(state=>state.cart)
const state2=useSelector(state=>state.sidebarproducts);
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY>60?setisactive(true):setisactive(false);
  })
},[])

const dispatch=useDispatch();
  return(
    <>
    
    <div className={`${isactive?'bg-white py-4 shadow-md':'bg-none py-6 '} fixed w-full z-10 transition-all`}>
    <div className='container flex justify-between items-center mx-auto h-full '>
      <div className='w-[40px]'>
        <Link to={'/'}>
      <img src={Logo} alt='logo/photo'/>
      </Link>
      </div>

    <div onClick={()=>dispatch(opencart())}><BsBag className='text-2xl cursor-pointer flex relative'/>
        <div className='bg-red-500 absolute top-10  text-[12px] w-[18px] h-[18px] text-white rounded-full flex items-center justify-center'>

{state2.length}
    </div>
    
    </div>

    </div>
    </div>
    </>
    
    );
};

export default Header;

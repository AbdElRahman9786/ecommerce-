import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {BsPlus,BsEyeFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../rtk/slices/sidebar-slice';


const Product = ({id,title,image,price,category}) => {
  const state=useSelector(state=>state.sidebarproducts)
const dispatch=useDispatch();


  return (
    <>
      <div  className='relative group max-h-[380px]   ' >
          <div className='  w-[250px] h-[300px]   border   border-[#e4e4e4] transition overflow-hidden  '>
          <img src={image} alt='product/image' className='hover:scale-110 duration-200 px-14 py-5 '/>
          </div>
          <div className='absolute  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0  group-hover:opacity-100 transition-all duration-200 top-6 -right-11 group-hover:right-5'>
            <button>
              <div className='text-3xl flex items-center justify-center w-12 h-12 text-white bg-red-500'><BsPlus onClick={()=>dispatch(fetchproducts(id))}/></div>
            </button>
            <Link to={`/product/${id}`} className='bg-white flex items-center justify-center h-12 w-12 text-primary drop-shadow-lg'><BsEyeFill/></Link>
            
            
          </div>
          <div className='w-[200px]  '>
            <div className='capitalize text-gray-500 mb-1 '>{category}</div>
            <Link to={`/product/${id}`}>
            <h2 className= 'font-semibold mb-1 '>{title}</h2>
            </Link>
            <div className='font-semibold'>$ {price}</div>
            
          </div>
        </div>
    </>
  );
};

export default Product;

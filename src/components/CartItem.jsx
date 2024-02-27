import React from 'react';
import {IoMdClose} from 'react-icons/io'

const CartItem = ({item}) => {
  return <div className='flex items-center justify-between gap-x-4'>
    <div className='w-auto min-h-[150px] flex items-center '>
      <div>
        <img src={item.image} className='max-w-[80px]'/>
        </div>
    </div>
    <div>
      <div className='uppercase text-sm max-w-[240px] text-primary hover:underline  '>{item.title}</div>
    </div>
    <div className='text-gray-500 hover:text-red-500 transition text-xl cursor-pointer'>
      <IoMdClose/>
    </div>
  </div>;
};

export default CartItem;

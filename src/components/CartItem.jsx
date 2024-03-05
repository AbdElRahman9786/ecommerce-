import React from 'react';
import {IoMdClose} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increase, increment, removefromcart } from '../rtk/slices/sidebar-slice';

const CartItem = ({item}) => {
  const state=useSelector(state=>state.sidebarproducts);
  const dispatch=useDispatch();
  const handleIncrement = () => {
    dispatch(increment({ id: item.id }));
  };

  const handledecrement = () => {
    dispatch(decrement({ id: item.id }));
  }
  return (
    <>
    <div className='flex flex-col   border-b'>
      <div className='flex p-4 justify-between'>
        <div className='w-24'><img src={item.image}/></div>
        <div className='px-4 text-sm font-semibold text-primary flex-col w-[300px] border-black'>{item.title}
<div className='flex w-[100px] h-[30px]  items-center justify-between border'>
  <div className='px-1 py-1 border'><button onClick={()=>dispatch(handleIncrement)}>+</button></div>
  <div>{item.quantaty}</div>
  <div className='px-1 py-1 border'><button onClick={()=>dispatch(handledecrement)}>-</button></div>
  
</div>



        
        </div>
        <div className='flex flex-row-reverse justify-between w-[100px]'><IoMdClose className='text-xl hover:text-red-500 cursor-pointer' onClick={()=>{dispatch(removefromcart(item.id))}}/>
        <div>${item.price*item.quantaty}</div>
        </div>

      </div>

    </div>
    </>
  )
};

export default CartItem;

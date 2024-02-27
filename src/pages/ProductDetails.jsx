import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../rtk/slices/sidebar-slice';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
//   const state=useSelector(state=>state.sidebarproducts)
//   console.log(state);
//   const {id}=useParams();
//   console.log(id);
// const dispatch=useDispatch();
// useEffect(()=>{
//   dispatch(fetchproducts(id))
// },[])
  return <div >Product Details Page</div>;
};

export default ProductDetails;

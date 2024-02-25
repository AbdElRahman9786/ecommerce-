import React, { useEffect } from 'react';
import { fetchproducts } from '../rtk/slices/product-slice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
 
  const dispatch = useDispatch();
  const state=useSelector((state) => state.products);
  

  
  useEffect(()=>{
    dispatch(fetchproducts());
  },[])

  const fillterproducrs=state.filter((item)=>{
    return (item.category==="men's clothing"|| item.category==="women's clothing")
  })
  console.log(fillterproducrs);

  return (
    <>
    {fillterproducrs.map((item)=>{
      return(
        <div>
          {item.category}
        </div>
      )
    })}
    </>
  )
};

export default Home;

import React, { useEffect } from 'react';
import { fetchproducts } from '../rtk/slices/product-slice';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';

const Home = () => {
 
  const dispatch = useDispatch();
  var state=useSelector((state) => state.products);
  
 
  

  
  useEffect(()=>{
    dispatch(fetchproducts());
  },[])

  const fillterproducrs=state.filter((item)=>{
    return (item.category==="men's clothing"|| item.category==="women's clothing")
  })
  console.log(fillterproducrs);

  return (
    <>
    <div className='py-16 px-5 flex flex-wrap gap-3 items-center justify-center gap-y-20 '>
    {fillterproducrs.map((item)=>{
      return(
      <Product id={item.id} title={item.title} image={item.image} price={item.price} category={item.category} key={item.id}/>
      )
    })}
    </div>
    </>
  )
};

export default Home;

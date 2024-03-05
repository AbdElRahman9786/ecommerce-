import { configureStore } from '@reduxjs/toolkit'
import productSlice from './rtk/slices/product-slice'
import  sidebarproductSlice  from './rtk/slices/sidebar-slice'
import  cartSlice  from './rtk/slices/opencart-slice'
import  productdetailsSlice  from './rtk/slices/productdetails-slice'





export default configureStore({
  reducer: {
    products:productSlice,
    sidebarproducts:sidebarproductSlice,
    cart:cartSlice,
    productdetails:productdetailsSlice,
    
  },
})
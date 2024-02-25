import { configureStore } from '@reduxjs/toolkit'
import productSlice from './rtk/slices/product-slice'


export default configureStore({
  reducer: {
    products:productSlice
  },
})
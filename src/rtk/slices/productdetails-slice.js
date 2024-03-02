import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";



export const fetchproducts = createAsyncThunk(
  "productdetailsSlice/fetchproducts",
  async (id) => {
   
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    return data;
  }
);

export const productdetailsSlice = createSlice({
  name: "productdetails",
  initialState: [],

  reducers: {},
  extraReducers:(builder)=>{
  


    builder.addCase(fetchproducts.fulfilled,(state, action) => {
        return [action.payload];
        

    })
  }
 
  
});

export const {  } = productdetailsSlice.actions;

export default productdetailsSlice.reducer;
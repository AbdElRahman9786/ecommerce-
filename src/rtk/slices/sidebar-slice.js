import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";



export const fetchproducts = createAsyncThunk(
  "sidebarproductSlice/fetchproducts",
  async (id) => {
   
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    return data;
  }
);

export const sidebarproductSlice = createSlice({
  name: "sidebarproducts",
  initialState: [],

  reducers: {
    addtocart: (state, action) => {
      return [...state,action.payload];
    },
  },
  extraReducers:(builder)=>{
  


    builder.addCase(fetchproducts.fulfilled,(state, action) => {
        return [...state,action.payload];
        

    })
  }
 
  
});

export const { addtocart } = sidebarproductSlice.actions;

export default sidebarproductSlice.reducer;
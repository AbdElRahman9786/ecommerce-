import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";



export const fetchproductsdetails = createAsyncThunk(
  "sidebarproductSlice/fetchproducts",
  async (id) => {
   
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();


  return  {...data,quantaty:1};

    
  }
);

export const sidebarproductSlice = createSlice({
  name: "sidebarproducts",
  initialState: [],

  reducers: {
    removefromcart: (state, action) => {
      const newitem=state.filter(item=>{ return item.id!==action.payload})
      state=newitem;
      return state;
    },
    clearcart:(state)=>{
      return state=[];
    },
    increment: (state, action) => {
      const { id } = action.payload;
      const product = state.find((item) => item.id === id);
      if (product) {
        product.quantaty += 1;
      }
    },

    decrement: (state, action) => {
      const { id } = action.payload;
      const product = state.find((item) => item.id === id);
      if (product && product.quantaty>1) {
        product.quantaty -= 1;
      }
    }


  },
  extraReducers: (builder) => {
    builder.addCase(fetchproductsdetails.fulfilled, (state, action) => {
        const existingProduct = state.find(item => item.id === action.payload.id);

        if (existingProduct) {
           
            existingProduct.quantaty += 1;
        } else {
           
            state.push({ ...action.payload, quantaty: 1 });
        }
    })
}

 
  
});

export const { removefromcart,clearcart,increment,decrement } = sidebarproductSlice.actions;

export default sidebarproductSlice.reducer;

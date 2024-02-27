import { createSlice } from "@reduxjs/toolkit";






export const cartSlice = createSlice({
  name: "cart",
  initialState: false,

  reducers: {
    opencart: (state, action) => {
      return state=!state;
    },
  },
 
 
  
});

export const { opencart } = cartSlice.actions;

export default cartSlice.reducer;
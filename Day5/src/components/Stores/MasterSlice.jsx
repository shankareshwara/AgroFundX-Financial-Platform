import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  FarmerDetails:{
    email:"",
    password:"",
  },
};
const masterSlice = createSlice({
  name: "Master",
  initialState,
  reducers: {
    addFarmer: (state, action) => {
      state.FarmerDetails = action.payload
    },
    deleteFarmerDetails: (state, action) => {
      state.FarmerDetails = {
        email:"",
        password:"",
      };
    }
  },
});

export const {
  
  addFarmer,
  deleteFarmerDetails
  
} = masterSlice.actions;

export default masterSlice.reducer;
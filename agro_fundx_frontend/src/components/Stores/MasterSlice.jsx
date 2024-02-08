import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Email: null,
  Token:null,
  user:{
    email: "",
    password : "",
    role:"user"
  },
  userDetails:null
};
const masterSlice = createSlice({
  name: "Master",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addEmail: (state, action) => {
      console.log(action);
      state.Email = action.payload;
    },
    addToken: (state, action) => {
      state.Token = action.payload;
    },
    addUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    
  },
});

export const {
  
  addUser,
  addEmail,
  addToken,
  addUserDetails
  
} = masterSlice.actions;

export default masterSlice.reducer;
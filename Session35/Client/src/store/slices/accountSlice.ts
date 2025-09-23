import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    email: "",
    password: "",
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.email=action.payload.email;
      state.password=action.payload.password;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email="";
      state.password="";
      state.isLoggedIn=false;
    },
  }
});

export default accountSlice.reducer;
export const account = accountSlice.actions;
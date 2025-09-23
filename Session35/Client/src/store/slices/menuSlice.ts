import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState: true,
    reducers:{
        switchMode: (state)=>{
            return !state
        }
    }
});
export default menuSlice.reducer
export const menu = menuSlice.actions
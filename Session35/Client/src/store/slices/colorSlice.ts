import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name: "color",
    initialState: true,
    reducers:{
        switchMode: (state)=>{
            return !state
        }
    }
});
export default colorSlice.reducer
export const color = colorSlice.actions
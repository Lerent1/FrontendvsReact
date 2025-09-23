import { createSlice } from "@reduxjs/toolkit";

export const backgroundSlice = createSlice({
    name: "background",
    initialState: true,
    reducers:{
        switchMode: (state)=>{
            return !state
        }
    }
});
export default backgroundSlice.reducer
export const background = backgroundSlice.actions
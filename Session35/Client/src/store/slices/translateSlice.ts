import { createSlice } from "@reduxjs/toolkit";

export const translateSlice = createSlice({
    name: "translate",
    initialState: true,
    reducers:{
        switchMode: (state)=>{
            return !state
        }
    }
});
export default translateSlice.reducer
export const translate = translateSlice.actions
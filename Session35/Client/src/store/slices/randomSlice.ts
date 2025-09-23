import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = [];
export const randomSlice = createSlice({
    name: "Random",
    initialState,
    reducers: {
        random: (state)=>{
            state.push(Math.floor(Math.random()*100));
        }
    }
});

export default randomSlice.reducer
export const random = randomSlice.actions
import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState: [
        {
            id: 1, 
            name: "Nguyen Van A", 
            isFavourite: true
        },
        {
            id: 2, 
            name: "Nguyen Van B", 
            isFavourite: false
        },
    ],
    reducers: {
        changeFavourite: (state, action)=>{
            return state.map((item) =>{return item.id == action.payload ?  {...item, isFavourite: !item.isFavourite} : item});
        }
    }
})

export default pageSlice.reducer;
export const page = pageSlice.actions;
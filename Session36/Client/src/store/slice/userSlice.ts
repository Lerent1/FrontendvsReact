import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser = createAsyncThunk("getAllUser", async () => {
    try {
        const response = await axios.get("http://localhost:8080/user");
        console.log("res", response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

export const deleteUser = createAsyncThunk("user/deleteUser", async (id: number) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    return id;
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUser.pending, () => {
            console.log("Dang xu ly qua trinh");
            
        })
        .addCase(getAllUser.fulfilled, (state, action) => {
            console.log("Lay du lieu thanh cong");
            state.user = action.payload;
        })
        .addCase(getAllUser.rejected, () => {
            console.log("Qua trinh lay du lieu that bai");
            
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.user = state.user.filter((user: any) => user.id != action.payload);
        })
    }
})

export default userSlice.reducer;
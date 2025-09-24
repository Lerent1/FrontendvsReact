import { configureStore } from "@reduxjs/toolkit";
import taskReducer  from "./slice/taskSlice";

export const store = configureStore({
    reducer : {
        task: taskReducer
    },
    devTools : true

});

export default store;
export type RootState = ReturnType<typeof store.getState>;
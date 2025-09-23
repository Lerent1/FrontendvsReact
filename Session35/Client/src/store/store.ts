import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice";
import random from "./slices/randomSlice";
import color from "./slices/colorSlice";
import background from "./slices/backgroundSlice";
import menu from "./slices/menuSlice";
import translate from "./slices/translateSlice";
import page from "./slices/pageSlice";
import account from "./slices/accountSlice";

export const store = configureStore({
  reducer: {
    counter,
    random,
    color,
    background,
    menu,
    translate,
    page,
    account,
  },
});

import { createStore, combineReducers } from "redux";
import { profile } from "./reducers/profile";
import { listUser } from "./reducers/listUser";
import { counter } from "./reducers/couter";
import { random } from "./reducers/random";
import { change } from "./reducers/change";
import { color } from "./reducers/color";
import { regisLogin } from "./reducers/regisLogin";

const rootReducer = combineReducers({
  bai1: profile,
  bai2: listUser,
  bai3: counter,
  bai4: random,
  bai5: change,
  bai6: color,
  bai78: regisLogin,
});

export const store = createStore(rootReducer);

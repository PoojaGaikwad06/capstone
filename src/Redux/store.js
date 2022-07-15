import reducer from "./reducer/index";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducer
})

export default store;
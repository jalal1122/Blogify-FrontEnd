import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/User/userSlice.js"
import colorReducer from "../features/Colors/colorSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    color: colorReducer,
  },
});

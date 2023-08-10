import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UsersSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/slice";
import { authReducer } from "./auth/slice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
  },
});

export default store;

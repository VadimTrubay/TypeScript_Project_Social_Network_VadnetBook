import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../redux/users/slice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;

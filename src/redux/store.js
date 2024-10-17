import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./user.slice";

const store = configureStore({
  reducer: { users: UserSlice.reducer },
});

export default store;

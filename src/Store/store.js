import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./api/TaskSlice";
export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  },
});
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// CRUD - Create, Read, Update and Delete

// get tasks
export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
  const res = await fetch("http://localhost:5000/tasks");
  return res.json();
});

const initialState = {
  tasks: [],
  status: "idle",
  error: null,
};
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  //reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        (state.status = "loading"), (state.error = null);
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        (state.status = "success"),
          (state.error = null),
          (state.tasks = action.payload);
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        (state.status = "failure"), (state.error = action.error.message);
      });
  },
});
export default taskSlice.reducer;
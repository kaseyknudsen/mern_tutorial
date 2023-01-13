import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//create async thunk fetches data and posts data to and from a REST API

//create initial state object
const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;

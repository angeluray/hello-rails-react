import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "api/v1/greetings";

export const fetchingGreeting = createAsyncThunk(
  "greeting/fetchingGreeting",
  async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
);

const greetingReducer = createSlice({
  name: "greeting",
  initialState: [],
  reducers: {
    pushedGreeting(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: {
    [fetchingGreeting.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.push(action.payload);
    },
  },
});

export const { pushedGreeting } = greetingReducer.actions;
export default greetingReducer.reducer;
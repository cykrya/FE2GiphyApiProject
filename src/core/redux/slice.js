import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "searchInput",
  initialState: {
    value: ""
  },
  reducers: {
    updateKeyword: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { updateKeyword } = inputSlice.actions;

export default inputSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signUp } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/UserType";
import { signUp } from "./userThunks";

type UserState = {
  user: UserType | null;
  error: string | null;
  loading: boolean;
};
// Define the initial state using that type
const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to sign up";
      });
  },
});

export default userSlice.reducer;

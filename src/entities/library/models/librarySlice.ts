import { createSlice } from "@reduxjs/toolkit";
import { getAllThunk } from "./libraryThunks";
import { LibraryTypeArray } from "../types/LibraryType";

type LibraryState = {
  libraries: LibraryTypeArray | null;
  error: string | null;
  loading: boolean;
};
// Define the initial state using that type
const initialState: LibraryState = {
  libraries: null,
  error: null,
  loading: false,
};
 

export const LibrarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.libraries = action.payload;
        state.error = null;
      })
      .addCase(getAllThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to load libraries";
      });
  },
});

export default LibrarySlice.reducer;

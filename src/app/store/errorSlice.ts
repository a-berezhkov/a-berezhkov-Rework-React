// frontend/src/store/errorSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
  errors: { [source: string]: string }; // Holds errors from multiple sources
}

const initialState: ErrorState = { errors: {} };

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (
      state,
      action: PayloadAction<{ source: string; message: string }>
    ) => {
 
      
      const { source, message } = action.payload;
      state.errors[source] = message; // Set error for a specific source
    },
    clearError: (state, action: PayloadAction<string>) => {
      delete state.errors[action.payload]; // Remove error for a specific source
    },
    clearAllErrors: (state) => {
      state.errors = {};
    },
  },
});

export const { setError, clearError, clearAllErrors } = errorSlice.actions;
export default errorSlice.reducer;

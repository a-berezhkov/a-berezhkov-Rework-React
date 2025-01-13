import { createSlice } from "@reduxjs/toolkit";
import { AttendanceArrayType } from "../types/AttendanceType";
import { getAttendanceThunk } from "./attendanceThunks";

type AttendanceState = {
  attendances: AttendanceArrayType | [];
  loading: boolean;
};

const initialState: AttendanceState = {
  attendances: [],
  loading: false,
};

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAttendanceThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAttendanceThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.attendances = action.payload;
      })
      .addCase(getAttendanceThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default attendanceSlice.reducer;

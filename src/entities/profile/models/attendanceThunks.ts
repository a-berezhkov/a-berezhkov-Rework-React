import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { setError } from "../../../app/store/errorSlice";
import AttendanceApi from "../api/AttendanceApi";
import { AttendanceArrayType } from "../types/AttendanceType";

type RejectValue = {
  message: string;
};

export const getAttendanceThunk = createAsyncThunk(
  "user/attendance",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      return await AttendanceApi.get();
    } catch (error) {
      const err = error as AxiosError<{
        message: string;
        status: string;
      }>;

      dispatch(
        setError({
          source: "attendance",
          message: err.response?.data.message ?? err.message,
        })
      );
      return rejectWithValue({
        message: err.response?.data.status || err.message,
      });
    }
  }
);

//? функция из Redux Toolkit для создания асинхронных действий.
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { setError } from "../../../app/store/errorSlice";
import LibraryApi from "../api/LibraryApi";
import { LibraryTypeArray } from "../types/LibraryType";
type RejectValue = {
  message: string;
};

export const getAllThunk = createAsyncThunk<
  LibraryTypeArray, // success
  void, // params
  { rejectValue: RejectValue }
>("library/getAll", async (_, { dispatch, rejectWithValue }) => {
  try {
    console.log("try");
    
    return await LibraryApi.get();
 
  } catch (error) {
    console.log("error");
    const err = error as AxiosError<{
      message: Record<string, string>;
      status: string;
    }>;

    dispatch(
      setError({
        source: "library/getAll",
        message:
          typeof err.response?.data.message === "string"
            ? err.response?.data.message
            : JSON.stringify(err.response?.data.message) ||
              "An unexpected error occurred.",
      })
    );

    return rejectWithValue({
      message: err.response?.data.status || err.message,
    });
  }
});

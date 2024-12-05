//? функция из Redux Toolkit для создания асинхронных действий.
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios"; //? Типизация ошибок

import { SignUpResponseType, UserType } from "../types/UserType";
import UserApi from "../api/UserApi";

type RejectValue = {
  message: string;
};

export const signUp = createAsyncThunk<
  SignUpResponseType,
  UserType,
  { rejectValue: RejectValue }
>("user/signUp", async (data, { rejectWithValue }) => {
  try {
 
    
    return await UserApi.register(data);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue({
      message: err.response?.data.message || err.message,
    });
  }
});

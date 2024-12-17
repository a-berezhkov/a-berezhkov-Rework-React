//? функция из Redux Toolkit для создания асинхронных действий.
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios"; //? Типизация ошибок

import { SignUpResponseType, UserType } from "../types/UserType";
import UserApi from "../api/UserApi";
import { type SignInFormType } from "../../../features/auth/SignInForm/SignInForm.d";
import { setError } from "../../../app/store/errorSlice";
type RejectValue = {
  message: string;
};

export const signUp = createAsyncThunk<
  SignUpResponseType,
  UserType,
  { rejectValue: RejectValue }
>("user/signUp", async (data, {dispatch,  rejectWithValue }) => {
  try {
    return await UserApi.register(data);
  } catch (error) {
    const err = error as AxiosError<{ message: Record<string, string>, status: string }>;
     for (const key in err.response?.data.message) {
      dispatch(
        setError({
          source: key,
          message: err.response?.data.message[key],
        })
      );
    }
 

    return rejectWithValue({
      message: err.response?.data.status || err.message,
    });
  }
});

export const signIn = createAsyncThunk<
  SignUpResponseType,
  SignInFormType,
  { rejectValue: RejectValue }
>("user/signIn", async (data, { dispatch, rejectWithValue }) => {
  try {
    return await UserApi.login(data);
  } catch (error) {
    const err = error as AxiosError<{ message: string; detail: string }>;

    dispatch(
      setError({
        source: "signIn",
        message: err.response?.data?.detail
          ? err.response?.data?.detail
          : err.message,
      })
    ); // Dispatch error to errorSlice

    return rejectWithValue({
      message: err.response?.data?.detail || err.message,
    });
  }
});

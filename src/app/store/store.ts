import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../../entities/auth/models/userSlice";
import errorReducer from "./errorSlice";
import LibrarySlice from "../../entities/library/models/librarySlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    errors: errorReducer,
    library: LibrarySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

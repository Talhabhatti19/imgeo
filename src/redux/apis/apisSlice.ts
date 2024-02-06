import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ApisState } from "./apisInterface";

const initialState: ApisState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  theme: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initiateRequest: (state: any) => {
      state.isLoading = true;
    },
    setTheme: (state, action) => {
      state.theme = action.payload.theme;
    },
    catchError: (state: any, action: PayloadAction<any>) => {
      state.isError = true;
      state.isLoading = false;
      state.message = action.payload.message;
    },
  },
});

export const { catchError, initiateRequest, setTheme } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ApisState } from "./apisInterface";

const initialState: ApisState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
   message: "",
  check:"",
};

export const authSlice = createSlice({
  name: "auth",
   initialState,
  reducers: {
    initiateRequest: (state:any) => {
      state.isLoading = true;
     },
     checkRedux: (state, action) => {
        state.check = action.payload
    },
    catchError: (state:any, action: PayloadAction<any>) => {
      state.isError = true;
      state.isLoading = false;
      state.message = action.payload.message;
    },
  },
});

export const { catchError, initiateRequest,checkRedux } = authSlice.actions;

export default authSlice.reducer;
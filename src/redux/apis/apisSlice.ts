import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ApisState } from "./apisInterface";

const initialState: ApisState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  theme: {},
  dashboardStructure: {},
  compilanceDashboard: {},
  actionBoard: [],
  notificationStructure: {},
  toggled: false,
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
    setDashboardStructure: (state, action) => {
      state.dashboardStructure = action.payload.data;
    },
    setCompilanceDashboard: (state, action) => {
      state.compilanceDashboard = action.payload.compilanceData;
    },
    setActionBoard: (state, action) => {
      state.actionBoard = action.payload.actionBoard;
    },
    setNotificationStructure: (state, action) => {
      state.notificationStructure = action.payload.notificationStructure;
    },
    toggleSidebar: (state) => {
      state.toggled = !state.toggled;
    },
    catchError: (state: any, action: PayloadAction<any>) => {
      state.isError = true;
      state.isLoading = false;
      state.message = action.payload.message;
    },
  },
});

export const {
  catchError,
  toggleSidebar,
  initiateRequest,
  setTheme,
  setDashboardStructure,
} = authSlice.actions;

export default authSlice.reducer;

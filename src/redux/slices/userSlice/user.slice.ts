import { Status } from "../../../config/enum/status";
import { loginApi } from "./../../../api/user/useApi";
import { LoginDataForm, UserInformation } from "./interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginResponse } from "@api/user/interface";

interface UserStateType {
  user: UserInformation | null;
  loadStatus: Status;
  message?: string;
}
const initialState: UserStateType = {
  user: null,
  loadStatus: Status.INITIAL,
};

export const loginAction = createAsyncThunk<LoginResponse, LoginDataForm>(
  "/user/login",
  async (payload, thunkApi) => {
    return await loginApi(payload);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state, action) => {
      state.loadStatus = Status.LOADING;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loadStatus = Status.SUCCESS;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loadStatus = Status.FAILED;
    });
  },
});

export const userReducer = userSlice.reducer;
export const {} = userSlice.actions;

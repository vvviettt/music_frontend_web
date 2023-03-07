import { UserInformation } from "./../api/types";
import { createSlice } from "@reduxjs/toolkit";

interface UserStateType {
  user: UserInformation | null;
  isLoading: boolean;
}
const initialState: UserStateType = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
export const {} = userSlice.actions;

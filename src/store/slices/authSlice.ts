import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProfile } from "../types/app";

interface IAuthState {
  user: IProfile | null | undefined;
  token: string;
}

const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
const savedToken = localStorage.getItem("token");

const initialState: IAuthState = {
  user: savedUser ? (savedUser as IProfile) : undefined,
  token: savedToken || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ user: IProfile; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = undefined;
      state.token = "";
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

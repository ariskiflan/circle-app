import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProfile } from "../../types/app";
import { getProfileAsync } from "../async/profile";

interface IAuthState {
  user: IProfile | null | undefined;
  token: string;
  loading: boolean;
  errorMessage: string;
}

const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
const savedToken = localStorage.getItem("token");

const initialState: IAuthState = {
  user: savedUser ? (savedUser as IProfile) : undefined,
  token: savedToken || "",
  loading: false,
  errorMessage: "",
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
  extraReducers: (builder) => {
    builder.addCase(getProfileAsync.pending, (state) => {
      state.user = undefined;
      state.loading = true;
    });

    builder.addCase(getProfileAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });

    builder.addCase(getProfileAsync.rejected, (state, action) => {
      state.loading = false;
      state.user = undefined;
      state.errorMessage = action.payload as string;
    });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getFollowerAsync, getFollowingAsync } from "../async/follows";
import type { IUser } from "../../types/app";

interface FollowState {
  followers: IUser[];
  followings: IUser[];
  loading: boolean;
  error: string | null;
}

const initialState: FollowState = {
  followers: [],
  followings: [],
  loading: false,
  error: null,
};

const followSlice = createSlice({
  name: "follows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getFollowerAsync
      .addCase(getFollowerAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFollowerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.followers = action.payload;
      })
      .addCase(getFollowerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch followers";
      })
      // getFollowingAsync
      .addCase(getFollowingAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFollowingAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.followings = action.payload;
      })
      .addCase(getFollowingAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch followings";
      });
  },
});

export default followSlice.reducer;

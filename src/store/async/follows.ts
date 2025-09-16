import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFollower, getFollowing } from "../../services/call/follow";

export const getFollowerAsync = createAsyncThunk(
  "follows/getFollower",
  async () => {
    try {
      const res = await getFollower();

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getFollowingAsync = createAsyncThunk(
  "follows/getFollowing",
  async () => {
    try {
      const res = await getFollowing();

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

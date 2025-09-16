import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFollower, getFollowing } from "../../services/call/follow";
import type { IUser } from "../../types/app";

// export const getFollowerAsync = createAsyncThunk(
//   "follows/getFollower",
//   async () => {
//     try {
//       const res = await getFollower();

//       return res.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const getFollowingAsync = createAsyncThunk(
//   "follows/getFollowing",
//   async () => {
//     try {
//       const res = await getFollowing();

//       return res.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const getFollowerAsync = createAsyncThunk<
  IUser[],
  void,
  { rejectValue: string }
>("follows/getFollower", async (_, { rejectWithValue }) => {
  try {
    const res = await getFollower();
    return res.data as IUser[];
  } catch (error) {
    return rejectWithValue("Failed to fetch followers");
  }
});

export const getFollowingAsync = createAsyncThunk<
  IUser[],
  void,
  { rejectValue: string }
>("follows/getFollowing", async (_, { rejectWithValue }) => {
  try {
    const res = await getFollowing();
    return res.data as IUser[];
  } catch (error) {
    return rejectWithValue("Failed to fetch following");
  }
});

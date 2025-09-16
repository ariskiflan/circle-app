import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "../../services/call/profile";
import type { IProfile } from "../../types/app";

export const getProfileAsync = createAsyncThunk<IProfile, string>(
  "auth/getProfile",
  async (token, { rejectWithValue }) => {
    try {
      const res = await getProfile(token);
      return res.data as IProfile;
    } catch (err) {
      return rejectWithValue("Failed to fetch profile");
    }
  }
);

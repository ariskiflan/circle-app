import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "../../services/call/profile";

export const getProfileAsync = createAsyncThunk(
  "auth/getProfile",
  async (token: string) => {
    try {
      const res = await getProfile(token);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

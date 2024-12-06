import { createAsyncThunk } from "@reduxjs/toolkit";
// import
import * as apis from "../../apis";

export const getCurrent = createAsyncThunk(
  "app/current",
  async (data, { rejectWithValue }) => {
    const response = await apis.apigetCurrent();
    if (!response.success) {
      return rejectWithValue(response);
    }
    return response.msg;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
// import
import * as apis from '../apis'

export const getCategory = createAsyncThunk('app/category', async (data, {rejectWithValue}) => {
    const response = await apis.apiGetCategory()
    console.log(response)
    if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(response);
      }
    return response
})
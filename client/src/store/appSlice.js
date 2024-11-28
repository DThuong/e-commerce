import { createSlice } from "@reduxjs/toolkit";
import * as actions from './asyncActions'

export const appSlice = createSlice({
  name: "app",
  initialState: {
    categories: null,
    isLoading: false
  },
  reducers: {},
  // Code logic xử lý async action
  extraReducers: (builder) => {
    // Bắt đầu thực hiện action login (Promise pending)
    // builder.addCase(login.pending, (state) => {
    //   // Bật trạng thái loading
    //   state.isLoading = true;
    // });

    // Khi thực hiện action login thành công (Promise fulfilled)
    builder.addCase(actions.getCategory, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.categories = action.payload.category;
    });

    // Khi thực hiện action login thất bại (Promise rejected)
    builder.addCase(actions.getCategory, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
  },
});

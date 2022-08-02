import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
  const res = await axios({
    method: "GET",
    url: "http://localhost:5000/posts",
  });
  return res.data;
});

export const addPost = createAsyncThunk("post/addPost", async (data) => {
  const res = await axios({
    method: "POST",
    url: "http://localhost:5000/posts",
    data: data,
  });
  return res.data;
});

export const postSlice = createSlice({
  name: "post",
  initialState: {
    status: "",
    items: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPost.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.status = "succeed";
      state.items = action.payload;
    },
    [fetchPost.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default postSlice.reducer;

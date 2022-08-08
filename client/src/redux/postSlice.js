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
    data,
  });
  console.log(data);
  return res.data;
});

export const updatePost = createAsyncThunk("post/updatePost", async (args) => {
  const { currentId } = args;
  const { data } = args;
  const res = await axios.patch(
    `http://localhost:5000/posts/${currentId}`,
    data
  );
  console.log(data);
  return res.data;
});

export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  console.log(id);
  const res = await axios.delete(`http://localhost:5000/posts/${id}`);
  return res.data;
});

export const postSlice = createSlice({
  name: "post",
  initialState: {
    status: "",
    items: [],
    error: null,
    currentId: null,
  },
  reducers: {
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
  },
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
export const { setCurrentId } = postSlice.actions;

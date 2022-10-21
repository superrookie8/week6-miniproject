import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api";

const initialState = {
  comments: [
    {
      id: 0,
      comment: "",
      nickname: "",
      postId: 0,
    },
  ],
};

// export const __getCom = createAsyncThunk(
//   "commennts/getCom",
//   async(payload, thunkAPI)=>{
//     try {
//       const {data} = await axiosInstance.get("/comments",)

//     }
//   }
// )

export const __postCom = createAsyncThunk(
  "comments/postcom",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post("/comments", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    //post
    [__postCom.pending]: (state) => {
      state.isLoading = true;
    },
    [__postCom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [__postCom.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;

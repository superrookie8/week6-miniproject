import { configureStore } from "@reduxjs/toolkit";
import comments from "../store/modules/commentSlice";

const store = configureStore({
  reducer: {
    comments: comments,
  },
});

export default store;

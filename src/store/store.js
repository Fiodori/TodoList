import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "store/api/taskSlice";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTaskList = createAsyncThunk("tasks/fetchTaskList", async () => {
  try {
    const res = await axios.get("http://localhost:5050/api/tasks/");

    const payload = res.data;

    return payload;
  } catch (err) {
    console.log(err.message);
  }
});

export const addTask = createAsyncThunk("tasks/addTask", async taskContent => {
  try {
    const res = await axios.post("http://localhost:5050/api/tasks/", { content: taskContent });

    return { taskContent };
  } catch (err) {
    console.log(err.message);
  }
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async taskId => {
  try {
    const res = await axios.delete(`http://localhost:5050/api/tasks/${taskId}`);

    return { taskId };
  } catch (err) {
    console.log(err.message);
  }
});

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (taskId, taskContent, isChecked) => {
    try {
      const res = await axios.put(`http://localhost:5050/api/tasks/${taskId}`, {
        content: taskContent,
        isChecked,
      });

      return { taskId };
    } catch (err) {
      console.log(err.message);
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    taskList: [],
    loading: false,
  },

  extraReducers: {
    [fetchTaskList.fulfilled]: (state, { payload }) => {
      state.taskList = payload;
      state.loading = false;
    },

    [addTask.fulfilled]: (state, { payload }) => {
      state.taskList = [...state.taskList, { content: payload.taskContent, isChecked: false }];
      state.loading = false;
    },

    [updateTask.fulfilled]: (state, { payload }) => {
      state.taskList = state.taskList.map((taskItem, taskIndex) => {
        if (taskIndex === payload.taskId) {
          return { ...taskItem, isChecked: !taskItem.isChecked };
        }

        return taskItem;
      });
      state.loading = false;
    },

    [deleteTask.fulfilled]: (state, { payload }) => {
      state.taskList.splice(payload.taskId, 1);
      state.loading = false;
    },

    [fetchTaskList.pending]: state => {
      state.loading = true;
    },

    [addTask.pending]: state => {
      state.loading = true;
    },

    [updateTask.pending]: state => {
      state.loading = true;
    },

    [deleteTask.pending]: state => {
      state.loading = true;
    },
  },
});

export const selectTaskLoading = state => state.tasks.loading;
export const selectTaskList = state => state.tasks.taskList;

export default taskSlice.reducer;

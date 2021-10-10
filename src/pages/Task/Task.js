import React, { useEffect, useState } from "react";
import TaskItem from "components/TaskItem";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTaskList,
  selectTaskLoading,
  fetchTaskList,
  addTask,
} from "store/api/taskSlice";

import {
  AddTaskContainer,
  AddTaskInput,
  TaskBlock,
  TaskContainer,
  TaskListContainer,
  AddTaskButton,
} from "./Styled";

import AddTaskIcon from "static/images/add_task_icon.svg";
import TaskLoader from "components/TaskLoader";

const Task = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");

  const taskList = useSelector(selectTaskList);
  const loading = useSelector(selectTaskLoading);

  useEffect(() => {
    dispatch(fetchTaskList());
  }, [dispatch]);

  const OnAddTask = () => {
    dispatch(addTask(taskText));
    setTaskText("");
  };

  return (
    <>
      {loading ? <TaskLoader /> : null}

      <TaskContainer>
        <TaskBlock />

        <TaskListContainer>
          {taskList.map((taskItem, taskIndex) => (
            <TaskItem key={taskIndex} taskItem={taskItem} taskId={taskIndex} />
          ))}
        </TaskListContainer>

        <AddTaskContainer>
          <AddTaskInput
            placeholder={"Добавить задачу"}
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
          />

          <AddTaskButton haveTaskText={taskText} onClick={OnAddTask}>
            <img src={AddTaskIcon} alt={"Добавить задачу"} />
          </AddTaskButton>
        </AddTaskContainer>
      </TaskContainer>
    </>
  );
};

export default Task;

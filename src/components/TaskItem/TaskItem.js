import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, changeCheckStatus } from "store/api/taskSlice";

import {
  TaskCheckbox,
  TaskText,
  TaskItemContainer,
  DeleteTaskButton,
} from "./Styled";

import DeleteTaskIcon from "static/images/delete_icon.svg";

const TaskItem = ({ taskItem, taskId }) => {
  const dispatch = useDispatch();

  const onCheck = () => {
    dispatch(changeCheckStatus(taskId));
  };

  const onDelete = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <TaskItemContainer>
      <TaskCheckbox isChecked={taskItem.isChecked} onClick={onCheck} />

      <TaskText isChecked={taskItem.isChecked}>{taskItem.content}</TaskText>

      <DeleteTaskButton onClick={onDelete}>
        <img src={DeleteTaskIcon} alt={"Удалить"} />
      </DeleteTaskButton>
    </TaskItemContainer>
  );
};

export default TaskItem;

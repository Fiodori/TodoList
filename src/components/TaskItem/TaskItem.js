import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "store/api/taskSlice";

import {
  TaskCheckbox,
  TaskText,
  TaskItemContainer,
  DeleteTaskButton,
  EditTaskButton,
  EditInput,
  EditDoneButton,
} from "./Styled";

import DeleteTaskIcon from "static/images/delete_icon.svg";
import EditTaskIcon from "static/images/edit_task_icon.svg";
import EditDoneIcon from "static/images/done_edit.svg";

const TaskItem = ({ taskItem, taskId }) => {
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const [taskContent, setTaskContent] = useState(taskItem.content);
  const [isEditMode, setEditMode] = useState(false);

  const onCheck = () => {
    dispatch(updateTask(taskId));
  };

  const onDelete = () => {
    dispatch(deleteTask(taskId));
  };

  const onEdit = () => {
    setEditMode(true);

    inputRef.current.focus();
  };

  //TODO: When there will be integration with backend side, add an edit request to this function
  const onEditDone = () => {
    setEditMode(false);
    inputRef.current.blur();
  };

  return (
    <TaskItemContainer>
      <TaskCheckbox isChecked={taskItem.isChecked} onClick={onCheck} />

      {isEditMode ? null : <TaskText isChecked={taskItem.isChecked}>{taskContent}</TaskText>}

      <EditInput
        isEditMode={isEditMode}
        value={taskContent}
        ref={inputRef}
        onChange={event => setTaskContent(event.target.value)}
      />

      {isEditMode ? (
        <EditDoneButton onClick={onEditDone}>
          <img src={EditDoneIcon} alt={"Редактировать"} />
        </EditDoneButton>
      ) : (
        <EditTaskButton onClick={onEdit}>
          <img src={EditTaskIcon} alt={"Редактировать"} />
        </EditTaskButton>
      )}

      <DeleteTaskButton onClick={onDelete}>
        <img src={DeleteTaskIcon} alt={"Удалить"} />
      </DeleteTaskButton>
    </TaskItemContainer>
  );
};

export default TaskItem;

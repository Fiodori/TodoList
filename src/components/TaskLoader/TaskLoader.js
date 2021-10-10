import React from "react";

import { TaskLoaderContainer, TaskLoaderText } from "./Styled";

const TaskLoader = () => {
  return (
    <TaskLoaderContainer>
      <TaskLoaderText>Loading...</TaskLoaderText>
    </TaskLoaderContainer>
  );
};

export default TaskLoader;

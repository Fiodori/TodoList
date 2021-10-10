import styled from "styled-components";

export const DeleteTaskButton = styled.button`
  position: absolute;
  top: 20px;
  right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition-duration: 0.3s;
  opacity: 0;

  width: 24px;
  height: 24px;

  border: none;
  outline: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
`;

export const TaskItemContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 80%;
  height: 64px;

  margin-bottom: 2px;

  background: #242426;
  border-radius: 6px;

  transition-duration: 0.3s;

  &:hover {
    background: #26272c;
  }
  &:hover ${DeleteTaskButton} {
    opacity: 1;
  }
`;

const TaskTextBase = styled.span`
  display: block;

  text-decoration: line-through;

  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  color: #d5d5d5;
`;

export const TaskText = styled(TaskTextBase)`
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
`;

const TaskCheckboxBase = styled.button`
  position: relative;

  width: 20px;
  height: 20px;

  margin-left: 16px;
  margin-right: 12px;

  border-radius: 4px;

  outline: none;
  padding: 0;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;

    top: 0;
    left: 30%;

    width: 30%;
    height: 62%;
    border: solid #242426;
    border-width: 0 2px 2px 0;

    transform: rotate(45deg);
  }
`;

export const TaskCheckbox = styled(TaskCheckboxBase)`
  background: ${({ isChecked }) => (isChecked ? "#6575b6" : "transparent")};
  border: ${({ isChecked }) => (isChecked ? "none" : "2px solid #777778")};

  &::after {
    display: ${({ isChecked }) => (isChecked ? "block" : "none")};
  }
`;

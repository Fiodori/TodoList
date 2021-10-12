import styled from "styled-components";

export const TaskContainer = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 40vw;
  height: 85vh;
  margin: 55px auto;

  padding-bottom: 120px;

  background: #121213;
  border-radius: 20px;
  border: 6px solid #26272c;
  box-sizing: border-box;
`;

export const TaskBlock = styled.div`
  height: 80px;
  width: 70%;

  margin-top: -40px;

  background: #121213;
  border: 6px solid #26272c;
  border-radius: 40px;
  box-sizing: border-box;
`;

export const TaskListContainer = styled.div`
  width: 100%;
  height: 85%;

  > div {
    margin: 2px auto;
  }

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  --moz-scrollbar-width: none;
`;

export const AddTaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 120px;
`;

const AddTaskButtonBase = styled.button`
  position: absolute;
  top: 48px;
  right: calc(10% + 16px);

  display: flex;
  align-items: center;
  justify-content: center;

  transition-duration: 0.3s;

  width: 24px;
  height: 24px;

  border: none;
  outline: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
`;

export const AddTaskButton = styled(AddTaskButtonBase)`
  opacity: ${({ haveTaskText }) => (haveTaskText ? "1" : "0")};
  z-index: ${({ haveTaskText }) => (haveTaskText ? "1" : "-1")};
`;

export const AddTaskInput = styled.input`
  width: calc(80% - 16px);
  height: 64px;

  padding-left: 16px;

  background: #242426;
  border-radius: 6px;

  outline: none;
  border: none;
  transition-duration: 0.3s;

  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  color: #d5d5d5;

  &::placeholder {
    color: #d5d5d5;
  }

  &:hover,
  &:focus {
    background: #26272c;
  }
`;

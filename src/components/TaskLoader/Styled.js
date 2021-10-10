import styled from "styled-components";

export const TaskLoaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;

export const TaskLoaderText = styled.span`
  display: block;

  font-size: 68px;
  line-height: 82px;
  font-weight: 700;
  color: #d5d5d5;
`;

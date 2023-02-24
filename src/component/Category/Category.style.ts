import styled from "styled-components";

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

interface IContainerProps {
  boardId: string;
}

export const Container = styled.div<IContainerProps>`
  position: ${(props) =>
    props.boardId === "categories" ? "relative" : "absolute"};
  top: ${(props) => (props.boardId === "categories" ? 0 : "130px")};
  right: ${(props) => (props.boardId === "categories" ? 0 : "43.5%")};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${(props) => (props.boardId === "categories" ? 0 : "center")};
  width: ${(props) => (props.boardId === "categories" ? "auto" : "138px")};
  height: ${(props) => (props.boardId === "categories" ? "auto" : "71px")};
  margin-top: 100px;
`;

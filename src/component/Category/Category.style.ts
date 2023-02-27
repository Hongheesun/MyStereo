import styled from "styled-components";

interface IContainerProps {
  boardId: string;
}

export const BoardWrapper = styled.div<IContainerProps>`
  position: ${(props) => props.boardId === "play" && "absolute"};
  top: 228px;
  width: 100%;
`;

export const Container = styled.div<IContainerProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: ${(props) => props.boardId === "play" && "100px"};
  height: ${(props) => props.boardId === "play" && "71px"};
  margin-top: ${(props) => props.boardId === "categories" && "70px"};
  margin: ${(props) => props.boardId === "play" && "0 auto"};
  z-index: ${(props) => props.boardId === "categories" && "999"};
`;

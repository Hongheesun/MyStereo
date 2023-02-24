import styled from "styled-components";

interface IContainerProps {
  boardId: string;
}

export const Container = styled.div<IContainerProps>`
  position: ${(props) =>
    props.boardId === "categories" ? "relative" : "absolute"};
  top: ${(props) => props.boardId === "play" && "130px"};
  right: ${(props) => props.boardId === "play" && "43.5%"};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${(props) => props.boardId === "play" && "center"};
  width: ${(props) => props.boardId === "play" && "138px"};
  height: ${(props) => props.boardId === "play" && "71px"};
  margin-top: 100px;
`;

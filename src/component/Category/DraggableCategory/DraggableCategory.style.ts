import styled from "styled-components";

interface IContainerProps {
  boardId: string;
}

export const VideoTapeWrapper = styled.div<IContainerProps>`
  position: relative;
  margin: ${(props) => props.boardId === "categories" && "20px 30px"};
`;

export const VideoTape = styled.img`
  width: 100px;
  height: 57px;
`;

export const MenuText = styled.div<IContainerProps>`
  position: ${(props) =>
    props.boardId === "categories" ? "relative" : "absolute"};
  top: ${(props) => (props.boardId === "categories" ? "40%" : "25%")};
  left: ${(props) => props.boardId === "play" && "25%"};
  text-align: center;
  color: #fff;
  font-size: 18px;
`;

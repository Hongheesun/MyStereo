import styled from "styled-components";

interface IContainerProps {
  boardId: string;
}

export const VideoTapeWrapper = styled.div<IContainerProps>`
  position: relative;
  margin: ${(props) => props.boardId === "categories" && "20px 30px"};
`;

export const VideoTape = styled.img`
  width: 90px;
  height: 55px;
`;

export const MenuText = styled.div<IContainerProps>`
  position: relative;
  top: ${(props) => (props.boardId === "categories" ? "42%" : "30px")};
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

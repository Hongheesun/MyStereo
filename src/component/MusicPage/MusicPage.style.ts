import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Buttons = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 48px;
  cursor: pointer;
`;

export const VideoButton = styled.img`
  width: 92px;
  height: 58px;
`;

export const Text = styled.span`
  position: absolute;
  top: 25%;
  left: 30%;
  right: 25%;
  font-size: 16px;
  font-weight: 800;
`;

export const BackButton = styled.button`
  position: absolute;
  right: 48px;
  padding: 10px;
  border: 1px solid black;
  background-color: transparent;
  font-size: 16px;
  font-weight: 800;
`;

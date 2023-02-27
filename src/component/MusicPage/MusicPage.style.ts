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
  z-index: 1;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 48px;
`;

export const VideoButton = styled.img`
  width: 92px;
  height: 58px;
`;

export const Text = styled.span`
  position: relative;
  bottom: 30px;
  right: 50%;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
`;

export const BackButton = styled.button`
  position: absolute;
  right: 48px;
  padding: 10px;
  border: 1px solid #fff;
  background-color: transparent;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  cursor: pointer;
`;

export const NoVideo = styled.div`
  margin-top: 200px;
  cursor: pointer;
`;

export const HomeButton = styled.img`
  position: absolute;
  bottom: 30px;
  left: 48px;
  width: 30px;
  z-index: 1;
  cursor: pointer;
`;

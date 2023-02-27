import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 240px;
  overflow-y: hidden;

  /* iPad in portrait & landscape */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    margin-top: 13%;
  }
`;
export const Stereo = styled.img`
  width: 654px;
  height: 390px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
`;

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

export const LeftWrapper = styled.div``;

export const VideoButtonWrapper = styled.div`
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

export const ArrowLottie = styled.div`
  position: absolute;
  top: 60px;
  left: 80px;
`;

export const VolumeControl = styled.div`
  position: absolute;
  top: 60px;
  left: 47px;

  input[type="range"] {
    height: 1px;
    -webkit-appearance: none;
    width: 90px;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #ffffff;
    border-radius: 7px;
    border: 0px solid #000000;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 10px;
    width: 10px;
    border-radius: 14px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #ffffff;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #ffffff;
    border-radius: 7px;
    border: 0px solid #000000;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 12px;
    width: 12px;
    border-radius: 14px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #ffffff;
    border: 0px solid #000000;
    border-radius: 14px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type="range"]::-ms-fill-upper {
    background: #ffffff;
    border: 0px solid #000000;
    border-radius: 14px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 12px;
    width: 12px;
    border-radius: 14px;
    background: #ffffff;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #ffffff;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #ffffff;
  }
`;

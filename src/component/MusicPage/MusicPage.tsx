import React from "react";
import { useRecoilState } from "recoil";
import { videoState } from "../../atoms";
import * as Styled from "./MusicPage.style";
import { Rain } from "../../assets/videos";
import { VideoTape_Transparent } from "../../assets/images";

function MusicPage() {
  const [playVideo, setPlayVideo] = useRecoilState(videoState);

  return (
    <Styled.Container>
      <Styled.Buttons>
        <Styled.ButtonWrapper>
          <Styled.VideoButton src={VideoTape_Transparent} />
          <Styled.Text>Rain</Styled.Text>
        </Styled.ButtonWrapper>
        <Styled.BackButton>No Video</Styled.BackButton>
      </Styled.Buttons>
      <Styled.Video muted loop autoPlay>
        <source src={Rain} type="video/mp4" />
      </Styled.Video>
    </Styled.Container>
  );
}

export default MusicPage;

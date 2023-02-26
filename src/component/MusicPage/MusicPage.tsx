import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { useRecoilState } from "recoil";
import Lottie from "react-lottie";
import { videoState, nowPlayContentState, categoriesState } from "../../atoms";
import * as Styled from "./MusicPage.style";
import { Video_White, Note } from "../../assets/images";
import { startAudioContent, startVideoContent } from "../../functions";

function MusicPage() {
  const [playVideo, setPlayVideo] = useRecoilState(videoState);
  const [categories, setCategories] = useRecoilState(categoriesState);
  const [nowPlayContent, setNowPlayContent] = useRecoilState(
    nowPlayContentState
  );
  const [showVideo, setShowVideo] = useState<boolean>(true);
  const [play, { stop }] = useSound(startAudioContent(categories.play[0]));

  // console.log(RainSound);
  const backMainPage = () => {
    setPlayVideo(false);
  };

  const noShowVideo = () => {
    setShowVideo(!showVideo);
  };

  const stopMusic = () => {
    stop();
  };

  // 로티 옵션
  const noteLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: Note,
  };

  useEffect(() => {
    setNowPlayContent(categories?.play[0]);
  }, []);

  return (
    <Styled.Container>
      <Styled.Buttons>
        <Styled.ButtonWrapper
          onClick={() => {
            play();
          }}
        >
          <Styled.VideoButton src={Video_White} />
          <Styled.Text>{categories.play[0]}</Styled.Text>
        </Styled.ButtonWrapper>
        <Styled.BackButton onClick={noShowVideo}>
          {showVideo ? "No Video" : "Show Video"}
        </Styled.BackButton>
      </Styled.Buttons>
      {showVideo ? (
        <Styled.Video muted loop autoPlay>
          <source
            src={startVideoContent(categories?.play[0])}
            type="video/mp4"
          />
        </Styled.Video>
      ) : (
        <Styled.NoVideo>
          <Lottie
            options={noteLottieOptions}
            height={600}
            width={600}
            isClickToPauseDisabled={false}
          />
        </Styled.NoVideo>
      )}
    </Styled.Container>
  );
}

export default MusicPage;

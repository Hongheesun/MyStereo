import { useState } from "react";
import useSound from "use-sound";
import { useSetRecoilState, useResetRecoilState, useRecoilValue } from "recoil";
import Lottie from "react-lottie";
import { videoState, categoriesState } from "../../atoms";
import * as Styled from "./MusicPage.style";
import { Video_White, Note, Home, Arrow } from "../../assets/images";
import { startAudioContent, startVideoContent } from "../../functions";

function MusicPage() {
  const setPlayVideo = useSetRecoilState(videoState);
  const categories = useRecoilValue(categoriesState);
  const [showVideo, setShowVideo] = useState<boolean>(true);
  const [showAudioButton, setShowAudioButton] = useState<boolean>(false);
  const [showStopButton, setShowStopButton] = useState<boolean>(false);
  const [play, { stop }] = useSound(startAudioContent(categories.play[0]), {
    interrupt: true,
    loop: true,
  });
  const reset = useResetRecoilState(categoriesState);

  const backMainPage = () => {
    setPlayVideo(false);
    reset();
    stop();
  };

  const noShowVideo = () => {
    setShowVideo(!showVideo);
  };

  const startMusic = () => {
    play();
    setShowStopButton(true);
  };

  const stopMusic = () => {
    stop();
    setShowStopButton(false);
  };

  // 로티 옵션
  const noteLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: Note,
  };

  const arrowLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: Arrow,
  };

  return (
    <Styled.Container>
      <Styled.Buttons>
        <Styled.ButtonWrapper
          onMouseOver={() => {
            setShowAudioButton(true);
          }}
          onMouseOut={() => {
            setShowAudioButton(false);
          }}
        >
          <Styled.VideoButton src={Video_White} />
          {showAudioButton ? (
            !showStopButton ? (
              <Styled.Text onClick={startMusic}>▶</Styled.Text>
            ) : (
              <Styled.Text onClick={stopMusic}>■</Styled.Text>
            )
          ) : (
            <Styled.Text>{categories.play[0]}</Styled.Text>
          )}
          {!showStopButton && (
            <Lottie options={arrowLottieOptions} height={50} width={50} />
          )}
        </Styled.ButtonWrapper>
        <Styled.BackButton onClick={noShowVideo}>
          {showVideo ? "No Video" : "Show Video"}
        </Styled.BackButton>
      </Styled.Buttons>
      <Styled.HomeButton src={Home} onClick={backMainPage} />
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

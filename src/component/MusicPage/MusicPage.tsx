import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { useRecoilState } from "recoil";
import { videoState, nowPlayContentState, categoriesState } from "../../atoms";
import * as Styled from "./MusicPage.style";
import {
  Rain,
  Fire,
  Cafe,
  Cafe2,
  CityLight,
  CityRain,
  Moon,
} from "../../assets/videos";
import { Video_White, Note } from "../../assets/images";
import { RainSound } from "../../assets/sounds";
import Lottie from "react-lottie";
import { Player } from "@lottiefiles/react-lottie-player";

function MusicPage() {
  // const playerRef = useRef(Player);
  const [play, { stop }] = useSound(RainSound);
  const [playVideo, setPlayVideo] = useRecoilState(videoState);
  const [categories, setCategories] = useRecoilState(categoriesState);
  const [nowPlayContent, setNowPlayContent] = useRecoilState(
    nowPlayContentState
  );
  const [showVideo, setShowVideo] = useState<boolean>(true);
  //console.log(nowPlayContent);

  const backMainPage = () => {
    setPlayVideo(false);
  };

  const noShowVideo = () => {
    setShowVideo(!showVideo);
  };

  const stopMusic = () => {
    stop();
  };

  const defaultOptions = {
    //예제1
    loop: true,
    autoplay: true,
    animationData: Note,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const startVideoContent = (content: string) => {
    if (content === "Jazz") {
      return Cafe;
    } else if (content === "Piano") {
      return Moon;
    } else if (content === "Fire") {
      return Fire;
    } else if (content === "Rain") {
      return Rain;
    } else if (content === "Lo-Fi") {
      return CityRain;
    } else if (content === "Classic") {
      return Cafe;
    }
  };

  useEffect(() => {
    setNowPlayContent(categories?.play[0]);
  }, []);

  return (
    <Styled.Container>
      <Styled.Buttons>
        <Styled.ButtonWrapper onClick={stopMusic}>
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
            options={defaultOptions}
            height={600}
            width={600}
            isClickToPauseDisabled={true}
          />
        </Styled.NoVideo>
      )}
    </Styled.Container>
  );
}

export default MusicPage;

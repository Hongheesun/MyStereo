import {
  Rain,
  Fire,
  Cafe,
  Cafe2,
  CityLight,
  CityRain,
  Moon,
} from "./assets/videos";
import { RainSound, FireSound, LofiSound, PianoSound } from "./assets/sounds";

export const startAudioContent = (content: string) => {
  if (content === "Jazz") {
    return PianoSound;
  } else if (content === "Piano") {
    return PianoSound;
  } else if (content === "Fire") {
    return FireSound;
  } else if (content === "Rain") {
    return RainSound;
  } else if (content === "Lo-Fi") {
    return LofiSound;
  } else if (content === "Classic") {
    return PianoSound;
  }
};

export const startVideoContent = (content: string) => {
  if (content === "Jazz") {
    return Cafe;
  } else if (content === "Piano") {
    return CityLight;
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

import { Fire, Cafe, Cafe2, CityLight, CityRain, Sunny } from "./assets/videos";
import {
  RainSound,
  FireSound,
  LofiSound,
  PianoSound,
  PianoSound2,
  JazzSound,
} from "./assets/sounds";

export const startAudioContent = (content: string) => {
  if (content === "Jazz") {
    return JazzSound;
  } else if (content === "Piano") {
    return PianoSound;
  } else if (content === "Fire") {
    return FireSound;
  } else if (content === "Rain") {
    return RainSound;
  } else if (content === "Lo-Fi") {
    return LofiSound;
  } else if (content === "Classic") {
    return PianoSound2;
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
    return CityRain;
  } else if (content === "Lo-Fi") {
    return Sunny;
  } else if (content === "Classic") {
    return Cafe2;
  }
};

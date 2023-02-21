import React from "react";
import * as Styled from "./Main.style";
import { Stereo } from "../../assets/images";
import Menu from "../Menu/Menu";

function Main() {
  return (
    <Styled.Container>
      <Styled.Stereo src={Stereo} alt="stereo" />
      <Menu />
    </Styled.Container>
  );
}

export default Main;

import React from "react";
import * as Styled from "./Main.style";
import { Stereo } from "../../assets/images";
import Category from "./../Category/Category";

function Main() {
  return (
    <Styled.Container>
      <Styled.Stereo src={Stereo} alt="stereo" />
      <Category />
    </Styled.Container>
  );
}

export default Main;

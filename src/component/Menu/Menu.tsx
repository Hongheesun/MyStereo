import * as Styled from "./Menu.style";
import { VideoTape } from "../../assets/images";
import MenuData from "../../assets/json/menu.json";

function Menu() {
  return (
    <Styled.Container>
      {MenuData.map((menu) => {
        return (
          <Styled.VideoTapeWrapper>
            <Styled.MenuText>{menu.menu}</Styled.MenuText>
            <Styled.VideoTape src={VideoTape} alt="vdeoTape" />
          </Styled.VideoTapeWrapper>
        );
      })}
    </Styled.Container>
  );
}

export default Menu;

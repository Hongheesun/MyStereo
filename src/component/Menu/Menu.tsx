import * as Styled from "./Menu.style";
import useSound from "use-sound";
import { VideoTape } from "../../assets/images";
import MenuData from "../../assets/json/menu.json";
import { ButtonSound } from "../../assets/sounds";

function Menu() {
  const [play] = useSound(ButtonSound);

  return (
    <Styled.Container>
      {MenuData.map((menu, id) => {
        return (
          <Styled.VideoTapeWrapper
            key={id}
            onClick={() => {
              play();
            }}
          >
            <Styled.MenuText>{menu.menu}</Styled.MenuText>
            <Styled.VideoTape src={VideoTape} alt="vdeoTape" />
          </Styled.VideoTapeWrapper>
        );
      })}
    </Styled.Container>
  );
}

export default Menu;

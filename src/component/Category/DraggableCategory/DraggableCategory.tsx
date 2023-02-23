import React from "react";
import useSound from "use-sound";
import { Draggable } from "react-beautiful-dnd";
import { ButtonSound } from "../../../assets/sounds";
import * as Styled from "./DraggableCategory.style";
import { VideoTape } from "../../../assets/images";

interface IDragabbleCategoryProps {
  category: string;
  index: number;
}

function DragabbleCategory({ category, index }: IDragabbleCategoryProps) {
  const [play] = useSound(ButtonSound);
  return (
    <Draggable draggableId={category} index={index}>
      {(magic) => (
        <Styled.VideoTapeWrapper
          onMouseDown={() => {
            play();
          }}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          <Styled.MenuText>{category}</Styled.MenuText>
          <Styled.VideoTape src={VideoTape} alt="vdeoTape" />
        </Styled.VideoTapeWrapper>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCategory);

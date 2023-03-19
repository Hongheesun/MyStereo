import React from "react";
import useSound from "use-sound";
import { Draggable } from "react-beautiful-dnd";
import { ButtonSound } from "../../../assets/sounds";
import * as Styled from "./DraggableCategory.style";
import { VideoTape } from "../../../assets/images";

interface IDragabbleCategoryProps {
  category: string;
  index: number;
  boardId: string;
}

function DragabbleCategory({
  category,
  index,
  boardId,
}: IDragabbleCategoryProps) {
  console.log(category);
  const [play] = useSound(ButtonSound);
  return (
    <Draggable draggableId={category} index={index}>
      {(provided) => (
        <Styled.VideoTapeWrapper
          onMouseDown={() => {
            play();
          }}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          boardId={boardId}
        >
          <Styled.MenuText boardId={boardId}>{category}</Styled.MenuText>
          <Styled.VideoTape src={VideoTape} alt="vdeoTape" />
        </Styled.VideoTapeWrapper>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCategory);

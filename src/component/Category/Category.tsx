import useSound from "use-sound";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import * as Styled from "./Category.style";
import { VideoTape } from "../../assets/images";
import { ButtonSound } from "../../assets/sounds";
import { categoriesState } from "../../atoms";

function Category() {
  const [play] = useSound(ButtonSound);
  const [categories, setCategories] = useRecoilState(categoriesState);

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setCategories((categories) => {
      const categoriesCopy = [...categories];
      categoriesCopy.splice(source.index, 1);
      categoriesCopy.splice(destination?.index, 0, draggableId);
      console.log(categoriesCopy);
      return categoriesCopy;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {(magic) => (
          <Styled.Container ref={magic.innerRef} {...magic.droppableProps}>
            {categories.map((category, index) => (
              <Draggable key={category} draggableId={category} index={index}>
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
            ))}
            {magic.placeholder}
          </Styled.Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Category;

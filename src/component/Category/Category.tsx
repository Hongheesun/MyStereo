import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import * as Styled from "./Category.style";
import { categoriesState } from "../../atoms";
import DraggableCategory from "./DraggableCategory/DraggableCategory";

function Category() {
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
              <DraggableCategory
                key={category}
                category={category}
                index={index}
              />
            ))}
            {magic.placeholder}
          </Styled.Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Category;

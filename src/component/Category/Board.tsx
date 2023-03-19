import { Droppable } from "react-beautiful-dnd";
import DragabbleCategory from "./DraggableCategory/DraggableCategory";
import * as Styled from "./Category.style";

interface IBoardProps {
  boardId: string;
  categories: string[];
}

function Board({ categories, boardId }: IBoardProps) {
  return (
    <Styled.BoardWrapper boardId={boardId}>
      <Droppable droppableId={boardId} direction="horizontal">
        {(provided) => (
          <Styled.Container
            ref={provided.innerRef}
            {...provided.droppableProps}
            boardId={boardId}
          >
            {categories.map((category, index) => (
              <DragabbleCategory
                key={category}
                category={category}
                index={index}
                boardId={boardId}
              />
            ))}
            {provided.placeholder}
          </Styled.Container>
        )}
      </Droppable>
    </Styled.BoardWrapper>
  );
}

export default Board;

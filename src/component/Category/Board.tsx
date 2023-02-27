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
        {(magic) => (
          <Styled.Container
            ref={magic.innerRef}
            {...magic.droppableProps}
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
            {magic.placeholder}
          </Styled.Container>
        )}
      </Droppable>
    </Styled.BoardWrapper>
  );
}

export default Board;

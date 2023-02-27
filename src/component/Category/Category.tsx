import useSound from "use-sound";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState, useSetRecoilState } from "recoil";
import * as Styled from "./Category.style";
import { categoriesState, videoState } from "../../atoms";
import Board from "./Board";
import { TapeSound2 } from "../../assets/sounds";

function Category() {
  const [play] = useSound(TapeSound2);
  const [categories, setCategories] = useRecoilState(categoriesState);
  const setPlayVideo = useSetRecoilState(videoState);

  const startVideo = () => {
    play();
    setTimeout(() => {
      setPlayVideo(true);
    }, 3400);
  };

  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // same board movement.
      setCategories((categories) => {
        const categoriesCopy = [...categories[source.droppableId]];
        categoriesCopy.splice(source.index, 1);
        categoriesCopy.splice(destination?.index, 0, draggableId);
        return {
          ...categories,
          [source.droppableId]: categoriesCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      startVideo();
      setCategories((categories) => {
        const categoryBoard = [...categories[source.droppableId]];
        const playBoard = [...categories[destination.droppableId]];
        categoryBoard.splice(source.index, 1);
        playBoard.splice(destination?.index, 0, draggableId);
        return {
          ...categories,
          [source.droppableId]: categoryBoard,
          [destination.droppableId]: playBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {Object.keys(categories).map((boardId) => (
        <Board
          key={boardId}
          boardId={boardId}
          categories={categories[boardId]}
        />
      ))}
    </DragDropContext>
  );
}

export default Category;

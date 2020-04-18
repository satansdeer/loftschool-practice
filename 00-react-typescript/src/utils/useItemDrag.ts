import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { useItemsContext } from "../ItemsContext/ItemsContext";
import { DragItem } from "../CustomDragLayer";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useItemsContext();
  const [, drag, preview] = useDrag({
    item,
    begin: () => dispatch({
      type: "SET_DRAGGED_ITEM",
      payload: item
    }),
    end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined })
  });
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);
  return { drag };
};

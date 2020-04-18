import { IDraggedItem } from "../ItemsContext/itemsReducer";

export const isHidden = (isPreview: boolean, draggedItem: IDraggedItem | undefined, itemType: string, id: string):boolean => {
  return Boolean(!isPreview &&
    draggedItem &&
    draggedItem.type === itemType &&
    draggedItem.id === id);
};

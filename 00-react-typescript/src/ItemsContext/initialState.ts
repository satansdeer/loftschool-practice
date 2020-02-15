import { IAppState } from "./itemsReducer";
import uuid from "uuid";

export const initialState: IAppState = {
  draggedItem: undefined,
  lanes: [
    {
      id: uuid(),
      text: "To Do",
      cards: [
        { id: uuid(), text: "Read Typescript documentation" },
        { id: uuid(), text: "Learn React" },
        { id: uuid(), text: "Create first React application" }
      ]
    },
    {
      id: uuid(),
      text: "In Progress",
      cards: [
        { id: uuid(), text: "Migrate codebase to Typescript" },
        { id: uuid(), text: "Update project documentation" }
      ]
    },
    {
      id: uuid(),
      text: "Done",
      cards: []
    }
  ]
};

import { IDraggedItem } from "./itemsReducer"

export type Action =
  | {
      type: "SET_DRAGGED_ITEM"
      payload: IDraggedItem | undefined
    }
  | {
      type: "ADD_LANE"
      payload: string
    }
  | {
      type: "ADD_CARD"
      payload: { text: string; columnId: string }
    }
  | {
      type: "MOVE_LANE"
      payload: {
        dragIndex: number
        hoverIndex: number
      }
    }
  | {
      type: "MOVE_CARD"
      payload: {
        dragIndex: number
        hoverIndex: number
        sourceLane: string
        targetLane: string
      }
    }

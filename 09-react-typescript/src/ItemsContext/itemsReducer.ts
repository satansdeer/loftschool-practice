import { moveItem } from "../utils/moveItem"
import { findItemIndexById } from "../utils/findLaneIndex"
import { Action } from "./Action"
import { v4 as uuid } from "uuid"

interface ICard {
  id: string
  text: string
}

interface IColumn {
  id: string
  text: string
  cards: ICard[]
}

export interface IDraggedItem {
  id: string
  type: string
}

export interface IAppState {
  draggedItem: IDraggedItem | undefined
  lanes: IColumn[]
}

export const itemsReducer = (state: IAppState, action: Action): IAppState => {
  switch (action.type) {
    case "SET_DRAGGED_ITEM": {
      return { ...state, draggedItem: action.payload }
    }
    case "ADD_LANE": {
      return {
        ...state,
        lanes: [...state.lanes, { id: uuid(), text: action.payload, cards: [] }]
      }
    }
    case "ADD_CARD": {
      const targetLaneIndex = findItemIndexById(
        state.lanes,
        action.payload.columnId
      )
      state.lanes[targetLaneIndex].cards.push({
        id: uuid(),
        text: action.payload.text
      })

      return {
        ...state
      }
    }
    case "MOVE_LANE": {
      const { dragIndex, hoverIndex } = action.payload
      state.lanes = moveItem(state.lanes, dragIndex, hoverIndex)
      return { ...state }
    }
    case "MOVE_CARD": {
      const { dragIndex, hoverIndex, sourceLane, targetLane } = action.payload
      const sourceLaneIndex = findItemIndexById(state.lanes, sourceLane)
      const targetLaneIndex = findItemIndexById(state.lanes, targetLane)
      const item = state.lanes[sourceLaneIndex].cards.splice(dragIndex, 1)[0]
      state.lanes[targetLaneIndex].cards.splice(hoverIndex, 0, item)
      return { ...state }
    }
    default:
      return state
  }
}

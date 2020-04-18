import React, { useRef } from "react"
import { useDrop } from "react-dnd"
import ItemTypes from "./utils/ItemTypes"
import { CardDragItem } from "./CustomDragLayer"
import { useItemsContext } from "./ItemsContext/ItemsContext"
import { isHidden } from "./utils/isHidden"
import { useItemDrag } from "./utils/useItemDrag"
import { CardContainer } from "./styles"

export interface CardProps {
  id: string
  columnId?: string
  text: string
  index: number
  isPreview?: boolean
}

const Card: React.FC<CardProps> = React.memo(
  ({ id, text, index, columnId, isPreview = false }) => {
    const type = ItemTypes.CARD
    const { state, dispatch } = useItemsContext()
    const ref = useRef<HTMLDivElement>(null)
    const [, drop] = useDrop({
      accept: ItemTypes.CARD,
      hover(item: CardDragItem) {
        if (item.id === id) {
          return
        }
        const dragIndex = item.index
        const hoverIndex = index
        const sourceLane = item.columnId
        const targetLane = columnId || "0"

        dispatch({
          type: "MOVE_CARD",
          payload: { dragIndex, hoverIndex, sourceLane, targetLane }
        })
        item.index = hoverIndex
        item.columnId = targetLane
      }
    })

    const { drag } = useItemDrag({
      type: "CARD",
      id,
      index,
      text,
      columnId: columnId || "0"
    })

    drag(drop(ref))

    return (
      <CardContainer
        isHidden={isHidden(isPreview, state.draggedItem, type, id)}
        isPreview={isPreview}
        ref={ref}
      >
        {text}

      </CardContainer>
    )
  }
)

export default Card

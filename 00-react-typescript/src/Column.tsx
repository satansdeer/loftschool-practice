import React, { useRef } from "react"
import { useDrop } from "react-dnd"
import ItemTypes from "./utils/ItemTypes"
import Card from "./Card"
import { useItemsContext } from "./ItemsContext/ItemsContext"
import { DragItem } from "./CustomDragLayer"
import { isHidden } from "./utils/isHidden"
import { useItemDrag } from "./utils/useItemDrag"
import { ColumnContainer, ColumnTitle } from "./styles"
import { AddNewItem } from "./AddNewItem"

export interface ColumnProps {
  id: string
  text: string
  index: number
  isPreview?: boolean
}

const Column: React.FC<ColumnProps> = React.memo(
  ({ id, text, index, isPreview = false }) => {
    const { state, dispatch } = useItemsContext()
    const type = ItemTypes.COLUMN

    const ref = useRef<HTMLDivElement>(null)

    const [, drop] = useDrop({
      accept: [ItemTypes.COLUMN, ItemTypes.CARD],
      hover(item: DragItem) {
        if (item.type === "COLUMN") {
          const dragIndex = item.index
          const hoverIndex = index

          if (dragIndex === hoverIndex) {
            return
          }

          dispatch({ type: "MOVE_LANE", payload: { dragIndex, hoverIndex } })
          item.index = hoverIndex
        }
        if (item.type === "CARD") {
          const dragIndex = item.index
          const hoverIndex = 0
          const sourceLane = item.columnId
          const targetLane = id

          if (sourceLane === targetLane) {
            return
          }

          dispatch({
            type: "MOVE_CARD",
            payload: { dragIndex, hoverIndex, sourceLane, targetLane }
          })

          item.index = hoverIndex
          item.columnId = targetLane
        }
      }
    })

    const { drag } = useItemDrag({ type: "COLUMN", id, index, text })

    drag(drop(ref))

    return (
      <ColumnContainer
        isPreview={isPreview}
        isHidden={isHidden(isPreview, state.draggedItem, type, id)}
        ref={ref}
      >
        <ColumnTitle>{text}</ColumnTitle>
          {state.lanes[index].cards.map((card, i: number) => (
            <Card
              key={card.id}
              id={card.id}
              columnId={id}
              text={card.text}
            />
          ))}
        <AddNewItem
          toggleButtonText="+ Add another card"
          dispatchButtonText="Add card"
          onAdd={text =>
            dispatch({ type: "ADD_CARD", payload: { text, columnId: id } })
          }
          dark
        />
      </ColumnContainer>
    )
  }
)

export default Column

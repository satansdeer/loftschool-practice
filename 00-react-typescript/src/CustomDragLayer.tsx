import React from "react"
import { XYCoord, useDragLayer } from "react-dnd"
import Column from "./Column"
import Card from "./Card"
import {CustomDragLayerContainer} from './styles'

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none"
    }
  }

  const { x, y } = currentOffset

  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform
  }
}

export type CardDragItem = {
  index: number
  id: string
  columnId: string
  text: string
  type: "CARD"
}

export type ColumnDragItem = {
  index: number
  id: string
  text: string
  type: "COLUMN"
}

export type DragItem = CardDragItem | ColumnDragItem

const CustomDragLayer: React.FC = () => {
  const { isDragging, item, initialOffset, currentOffset } = useDragLayer(
    monitor => ({
      item: monitor.getItem(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging()
    })
  )

  if (!isDragging) {
    return null
  }

  return (
    <CustomDragLayerContainer>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {item.type === "COLUMN" ? (
          <Column
            id={item.id}
            text={item.text}
            index={item.index}
            isPreview={true}
          />
        ) : (
          <Card isPreview={true} index={0} id={item.id} text={item.text} />
        )}
      </div>
    </CustomDragLayerContainer>
  )
}
export default CustomDragLayer

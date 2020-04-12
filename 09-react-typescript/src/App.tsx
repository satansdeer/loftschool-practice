import React from "react"
import Column from "./Column"
import CustomDragLayer from "./CustomDragLayer"
import { useItemsContext } from "./ItemsContext/ItemsContext"
import { AppContainer } from "./styles"
import { AddNewItem } from "./AddNewItem"

const App = () => {
  const { state, dispatch } = useItemsContext()

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lanes.map((column, i: number) => {
        return (
          <Column key={column.id} id={column.id} text={column.text} index={i} />
        )
      })}
      <AddNewItem
        toggleButtonText="+ Add another list"
        dispatchButtonText="Add list"
        onAdd={text => dispatch({ type: "ADD_LANE", payload: text })}
      />
    </AppContainer>
  )
}

export default App

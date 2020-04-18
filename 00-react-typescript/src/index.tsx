import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { DndProvider } from "react-dnd"
import Backend from "react-dnd-html5-backend"
import { ItemsContextProvider } from "./ItemsContext/ItemsContext"

ReactDOM.render(
  <DndProvider backend={Backend}>
    <ItemsContextProvider>
      <App />
    </ItemsContextProvider>
  </DndProvider>,
  document.getElementById("root")
)
import React from "react"
import { App } from "./App"
import { createMemoryHistory } from 'history'
import { render } from "@testing-library/react"
import { Router } from "react-router-dom"

// https://jestjs.io/docs/en/api#testtodoname

describe("App", () => {
  it("renders successfully", () => {
    const history = createMemoryHistory()
    const { container } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(container.innerHTML).toMatch('Goblin Store')
  })
  
  it.todo("contains checkout route")
  it.todo("contains cart route")
  it.todo("contains order route")
})

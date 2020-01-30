import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { initStore } from "./initStore";
import { Provider } from 'react-redux'

test("full app rendering/navigating", () => {
  const history = createMemoryHistory();
  const store = initStore()
  const { container, getByText } = render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  expect(container.innerHTML).toMatch("Home");

  fireEvent.click(getByText(/private/i));

  expect(container.innerHTML).toMatch("Authenticate here");

  fireEvent.click(getByText(/Login/i));

  expect(container.innerHTML).toMatch("Private");
});

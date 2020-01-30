import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initStore } from "./initStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = initStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

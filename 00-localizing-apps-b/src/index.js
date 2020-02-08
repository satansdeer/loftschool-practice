import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { I18nProvider } from "react-i18n-jed";
import Jed from "jed";

import svSE from "./translations/locales/sv-se.json";

const i18n = new Jed(svSE);

ReactDOM.render(
  <I18nProvider locale="ru-RU" i18n={i18n}>
    <App />
  </I18nProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

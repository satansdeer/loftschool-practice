import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import svLocaleData from "react-intl/locale-data/sv";
import { IntlProvider, addLocaleData } from "react-intl";
import translations from "./translations/locales";

addLocaleData(svLocaleData);

const locale = "sv";
const messages = translations[locale];

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { IntlProvider, addLocaleData} from "react-intl";
import esLocaleData from "react-intl/locale-data/es";
import svLocaleData from "react-intl/locale-data/sv";
import translations from './i18n/locales'

addLocaleData(esLocaleData);
addLocaleData(svLocaleData);

const locale = window.location.search.replace("?locale=","") || "en"
const messages = translations[locale];

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();

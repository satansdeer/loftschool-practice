import htmlParser from "html-react-parser";
import React, { Component } from "react";
import { translate } from "react-i18n-jed";

class T extends Component {
  render() {
    const { children, i18n, placeholders } = this.props;
    if (!children) {
      return "";
    }
    if (!i18n || !i18n.translate) {
      return children;
    }
    const args = placeholders || [];
    return htmlParser(i18n.translate(children).fetch(...args));
  }
}

export default translate(T);

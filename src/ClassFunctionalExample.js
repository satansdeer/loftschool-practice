import React from "react";
import "./App.css";

const notification = "Some warning";

const Alert = () => {
  if (!notification) {
    return null;
  }

  return <p>{notification}</p>;
};

export default Alert;

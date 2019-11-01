import React from "react";
import { ColorContext } from "./ColorContext";

export const ThemedButton = ({ children }) => {
  const { color } = React.useContext(ColorContext);

  return <button style={{ backgroundColor: color }}>{children}</button>;
};

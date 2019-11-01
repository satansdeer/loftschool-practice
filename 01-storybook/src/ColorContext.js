import React from "react";

export const ColorContext = React.createContext();

export const ColorProvider = ({ children }) => {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      {children}
    </ColorContext.Provider>
  );
};

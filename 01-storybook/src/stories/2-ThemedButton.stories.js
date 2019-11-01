import React from "react";
import { action } from "@storybook/addon-actions";
import { ThemedButton } from "../ThemedButton";
import { ColorProvider } from "../ColorContext";

export default {
  title: "ThemedButton"
};

export const withContext = () => (
  <ColorProvider>
    <ThemedButton onClick={action("clicked")}>Hello ThemedButton - something</ThemedButton>
  </ColorProvider>
);
export const regular = () => (
  <ThemedButton onClick={action("clicked")}>Hello ThemedButton</ThemedButton>
);

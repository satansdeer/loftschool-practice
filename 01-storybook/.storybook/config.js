import React from 'react';
import { configure } from "@storybook/react";
import requireContext from "require-context.macro";
import { addDecorator } from "@storybook/react";
import { ColorProvider } from "../src/ColorContext";

addDecorator(storyFn => <ColorProvider>{storyFn()}</ColorProvider>);

// automatically import all files ending in *.stories.js
configure(requireContext("../src/stories", true, /\.stories\.js$/), module);

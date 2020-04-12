import React from "react";
import App from "./App";
import renderer from "react-test-renderer";

test("Renders with specified title", () => {
  const component = renderer.create(<App title="Webpack"/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

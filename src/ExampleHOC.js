import React from "react";

export const exampleHOC = WrappedComponent => {
  return class ExampleHOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  };
};

export const exampleIIHOC = WrappedComponent => {
  return class ExampleIIHOC extends WrappedComponent {
    render() {
      const renderTree = super.render();
      console.log(renderTree)
      return renderTree;
    }
  };
};

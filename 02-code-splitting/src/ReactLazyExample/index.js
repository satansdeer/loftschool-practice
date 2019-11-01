import React, { Component, Suspense } from "react";

function Loading() {
  return <h3>Loading...</h3>;
}

const SomeComponent = React.lazy(() => import("./SomeComponent"));

class App extends Component {
  state = {
    showComponent: false
  };

  handleClick = () => {
    this.setState({
      showComponent: true
    });
  };

  render() {
    if (this.state.showComponent) {
      return (
        <Suspense fallback={<Loading />}>
          <SomeComponent />
        </Suspense>
      );
    } else {
      return (
        <>
          <h1>Hello React.lazy!</h1>
          <button onClick={this.handleClick}>Click me!</button>
        </>
      );
    }
  }
}

export default App;

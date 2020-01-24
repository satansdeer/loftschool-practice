import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';

function Loading() {
  return <h3>Loading...</h3>;
}

const SomeComponent = Loadable({
  loader: () => import('./SomeComponent'),
  loading: Loading,
  delay: 60
});

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
      return <SomeComponent />;
    } else {
      return (
        <Fragment>
          <h1>Hello react-loadable!</h1>
          <button onClick={this.handleClick}>Click me!</button>
        </Fragment>
      );
    }
  }
}

export default App;

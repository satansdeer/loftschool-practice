import React, { Component } from 'react';

import ReusableButton from './ReusableButton';

export class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <main>
        <h1>Main page</h1>
        <div data-testid="count">{this.state.count}</div>
        <ReusableButton onClick={this.increment} />
      </main>
    );
  }
}

export default App;

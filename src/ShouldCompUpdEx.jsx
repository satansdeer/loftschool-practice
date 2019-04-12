import React, { PureComponent } from "react";

class ShouldCompUpdEx extends PureComponent {
  state = { ticks: 0 };

  componentDidMount() {
    setInterval(() => {
      this.setState({ ticks: this.state.ticks + 1});
    }, 100);
  }

  render() {
    return <div />;
  }
}

export default ShouldCompUpdEx;

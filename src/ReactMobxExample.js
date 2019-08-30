import React, { Component } from "react";
import { observable, decorate } from "mobx";
import { observer } from "mobx-react";

class App extends Component {
  counter = 0;

  onIncrement = () => {
    this.counter++;
  };

  onDecrement = () => {
    this.counter--;
  };

  render() {
    return (
      <div>
        {this.counter}

        <button onClick={this.onIncrement} type="button">
          Increment
        </button>
        <button onClick={this.onDecrement} type="button">
          Decrement
        </button>
      </div>
    );
  }
}

export default decorate(observer(App), { counter: observable });

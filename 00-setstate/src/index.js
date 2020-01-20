class FakeStateExample {
  state = { count: 0 };

//   setState = (newState) => {
//       this.state = newState;
//   }

  setState = newState => {
    setTimeout(() => {
      this.state = newState;
    }, 0);
  };

  constructor() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    console.log(this.state);
  }
}

console.log("Init");
const example = new FakeStateExample();
console.log("End");

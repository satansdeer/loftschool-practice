import React, { Component } from "react";


class FakeComponent {
    constructor(){
       setInterval(()=> {
           this.componenDidUpdate();
       }, 1000) 
    }

    componenDidUpdate(){

    }
}

class ProfilePage extends FakeComponent {
    componenDidUpdate(){
        console.log('-----')
    }
}

const profile = new ProfilePage()

class BindExample extends Component {
  state = { clicks: 0 };

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me (clicks: {this.state.clicks})
      </button>
    );
  }
}

export default BindExample;

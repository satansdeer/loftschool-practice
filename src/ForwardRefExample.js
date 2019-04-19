import React, { Component } from "react";

const EmailInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} type="email" className="AppEmailInput" />
));

class App extends Component {
  emailRef = React.createRef();

  render() {
    return (
      <div>
        <EmailInput ref={this.emailRef} />
        <button onClick={() => this.onClickButton()}>
          Click me to focus email
        </button>
      </div>
    );
  }

  onClickButton() {
    this.emailRef.current.focus();
  }
}

export default App;

import React, { Component } from "react";
import { FormattedMessage} from 'react-intl'
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FormattedMessage
              id="add.edit"
              defaultMessage="Edit {code} and save to reload."
              values={{
                  code: <code>src/App.js</code>
              }}
            />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="app.learn" defaultMessage="Learn React" />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
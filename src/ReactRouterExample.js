import React, { Component } from "react";
import { Route, Link, Switch, Redirect, BrowserRouter } from "react-router-dom";

const About = () => <div>About</div>;
const Home = () => <div>Home</div>;
const Topics = () => <div>Topics</div>;
// const PageNotFound = () => <div>404 Not found</div>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/topics">Topics</Link>

          <hr />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Redirect from="/about2" to="/about" />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

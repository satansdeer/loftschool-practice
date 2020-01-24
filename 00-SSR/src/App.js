import React from "react";
import "./App.css";
import { Switch, Redirect, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>About</h1>
}

function RedirectPage() {
  return <Redirect to="/"/> 
}

function App() {
  return (
    <>
    {/* <Redirect to="https://google.com"/> */}
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/redirect">Redirect</Link>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/redirect" component={RedirectPage}/>
    </Switch>
    </>
  );
}

export default App;

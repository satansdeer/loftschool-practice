import React from "react";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import { Switch, Link, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  return <h1>Home</h1>;
};

const Private = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Private</h1>
      <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
    </>
  );
};

const Login = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  return (
    <>
      <h1>Authenticate here</h1>
      <button
        onClick={() => {
          dispatch({ type: "LOGIN" });
          // history.push("/private");
        }}
      >
        Login
      </button>
    </>
  );
};

function App() {
  const authed = useSelector(state => state.authed);

  return (
    <>
      <Link to="/private">Private</Link>
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/private" component={Private} />
      </Switch>
    </>
  );
}

export default App;

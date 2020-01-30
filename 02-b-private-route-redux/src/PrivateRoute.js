import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authed = useSelector(state => state.authed)

  return <Route
    {...rest}
    render={props =>
      authed ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
};

export default PrivateRoute;

import React, { Component, createContext } from "react";

export const AuthContext = createContext({foo: "bar"});

export class AuthProvider extends Component {
  state = { authorized: false };

  login = () => {
    this.setState({ authorized: true });
  };

  logout = () => {
    this.setState({ authorized: false });
  };

  render() {
    return <AuthContext.Provider
      value={{
        authorized: this.state.authorized,
        login: this.login,
        logout: this.logout,
      }}
    >
      {this.props.children}
    </AuthContext.Provider>;
  }
}

import React from "react";

export const AuthContext = React.createContext({foo: 'bar'});

export class AuthProvider extends React.Component {
  state = { authenticated: false };

  login = () => {
    this.setState({ authenticated: true });
  };

  logout = () => {
    this.setState({ authenticated: false });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          authenticated: this.state.authenticated,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} />;
          }}
        </AuthContext.Consumer>
      );
    }
  };
};

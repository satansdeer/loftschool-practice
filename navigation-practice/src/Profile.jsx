import React, { Component } from "react";
import { AuthContext } from "./AuthContext";

export class Profile extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(values) => {
          return (
            <>
              <>{JSON.stringify(values)}</>
              {values.authorized ? (
                <>
                  <div>PROFILE: Logged in</div>
                  <button onClick={values.logout}>Log out</button>
                </>
              ) : (
                <>
                  <div>PROFILE: Logged out</div>
                  <button onClick={values.login}>Log in</button>
                </>
              )}
            </>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

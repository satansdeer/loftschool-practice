import React from 'react'
import { withAuth } from './AuthContext'

class Profile extends React.Component {
  render () {
    return <>
      PROFILE
      <div>
        {!this.props.authenticated ? (
          <button onClick={this.props.login}>Log in</button>
        ) : (
          <button onClick={this.props.logout}>Log out</button>
        )}
      </div>
    </>
  }
}

export default withAuth(Profile)
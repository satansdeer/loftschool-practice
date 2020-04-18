import React from 'react'
import { withRouter } from 'react-router'
import { Link, Route, Switch } from 'react-router-dom'

const About = () => <h1>You are on the about page</h1>
const Home = () => <h1>You are home</h1>
const NoMatch = () => <h1>404 Not Found</h1>

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
))

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
      <LocationDisplay />
    </div>
  )
}

export { LocationDisplay, App }
import React from 'react';
import { render } from 'react-dom';
import { 
  Route, 
  Switch, 
  BrowserRouter,
} from 'react-router-dom';
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';

import './style.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Error404 from './Error404';

const App = ({  }) => (
  <BrowserRouter>
    <div>
      <Nav />
      <main>
        <Route
          render={({ location }) => {
            const { pathname } = location;
            return (
              <TransitionGroup>
                <CSSTransition 
                  key={pathname}
                  classNames="page"
                  timeout={{
                    enter: 1000,
                    exit: 1000,
                  }}
                >
                  <Route
                    location={location}
                    render={() => (
                      <Switch>
                        <Route
                          exact
                          path="/"
                          component={Home}
                        />
                        <Route
                          path="/about"
                          component={About}
                        />
                        <Route
                          component={Error404}
                        />
                      </Switch>
                    )}
                  />
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </main>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));

import React from "react";
import Profile from "./Profile";
import "./App.css";

const PAGES = {
  home: <>HOME</>,
  about: <>ABOUT</>,
  profile: <Profile />,
};

class App extends React.Component {
  state = { currentPage: this.props.initialPage };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <nav>
          {Object.entries(this.props.pages).map((page) => {
            return (
              <button
                key={page[0]}
                onClick={() => {
                  this.navigateTo(page[0]);
                }}
              >
                {page[0]}
              </button>
            );
          })}
        </nav>
        <div data-testid="container">{this.props.pages[this.state.currentPage]}</div>
      </>
    );
  }
}

App.defaultProps = {
  pages: PAGES,
  initialPage: "home",
};

export default App;

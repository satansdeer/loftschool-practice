import React, { Component } from 'react';
import './App.css';
import { Profile } from './Profile';

const PAGES = {
  home: <>HOME</>,
  about: <>ABOUT</>,
  profile: <Profile />
}

class App extends Component {
  state = {currentPage: "home"}

  navigateTo = (currentPage) => {
    this.setState({currentPage})
  }

  render() {
    return <>
      <nav>
        <button onClick={() => this.navigateTo("home")}>Home</button>
        <button onClick={() => this.navigateTo("about")}>About</button>
        <button onClick={() => this.navigateTo("profile")}>Profile</button>
      </nav>
      <div>
        {
          PAGES[this.state.currentPage]
        }
      </div>
    </>
  }  
}

export default App;

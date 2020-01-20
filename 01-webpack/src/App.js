import React from "react";
import twitter from './assets/twitter.svg';
import facebook from './assets/facebook.svg';
import wikipedia from './assets/wikipedia.svg';

const App = ({ title }) => (
  <div>
    <img
      width={twitter.width}
      height={twitter.height}
      src={twitter.url}
    />
    <img
      width={facebook.width}
      height={facebook.height}
      src={facebook.url}
    />
    <img
      width={wikipedia.width}
      height={wikipedia.height}
      src={wikipedia.url}
    />
    {title}
  </div>
);

export default App;

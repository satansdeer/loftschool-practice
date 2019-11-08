import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Store } from "./Store";
import {
  RESET,
  START_GAME,
  ADD_STORY,
  NEW_GAME,
  GAME,
  VOTE,
  RESULTS,
  SET_STATE,
  unvoted
} from "./Constants";
import * as serviceWorker from "./serviceWorker";

const storiesReducer = (state, action) => {
  switch (action.type) {
    case RESET:
      return { stories: [], screen: NEW_GAME };
    case START_GAME:
      return { ...state, screen: GAME };
    case SET_STATE:
      return { ...action.payload };
    case ADD_STORY:
      return {
        ...state,
        stories: [...state.stories, { text: action.payload, votes: [] }]
      };
    case VOTE:
      const stories = state.stories.map(story =>
        story.text === action.payload.text
          ? { ...story, votes: [...story.votes, action.payload.size] }
          : story
      );
      return {
        ...state,
        stories,
        screen: stories.filter(unvoted).length ? state.screen : RESULTS
      };
    default:
      throw new Error();
  }
};

ReactDOM.render(
  <Store
    reducer={storiesReducer}
    initialState={{ stories: [], screen: NEW_GAME }}
  >
    <App />
  </Store>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

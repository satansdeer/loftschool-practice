import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { NewGameScreen } from "./NewGameScreen";
import { GameScreen } from "./GameScreen";
import { ResultsScreen } from "./ResultsScreen";
import { StoreContext } from "./Store";
import { FlexContainer } from "./Components";
import { START_GAME, ADD_STORY, VOTE, SET_STATE, unvoted } from "./Constants";
import { send, onMessage, onConnect } from "./Websocket";

const App = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [connected, setConnected] = useState(false);

  const startGame = () => {
    dispatch({ type: START_GAME });
  };

  const addStory = text => {
    dispatch({ type: ADD_STORY, payload: text });
  };

  const vote = (size, text) => {
    dispatch({ type: VOTE, payload: { size, text } });
  };

  useEffect(() => {
    onMessage(message => {
      dispatch({ type: SET_STATE, payload: JSON.parse(message.data) });
    });
  }, []);

  useEffect(() => {
    onConnect(() => {
      send("connected");
      setConnected(true);
    });
  }, []);

  useEffect(() => {
    send(JSON.stringify(state));
  }, [state.stories.length, state.screen]);

  const { stories, screen } = state;
  const currentStory = stories.filter(unvoted)[0];

  return connected ? (
    <FlexContainer>
      {
        {
          NEW_GAME: (
            <NewGameScreen
              stories={stories}
              onClick={addStory}
              startGame={startGame}
            />
          ),
          GAME: (
            <GameScreen
              stories={stories}
              currentStory={currentStory}
              vote={vote}
            />
          ),
          RESULTS: <ResultsScreen />
        }[screen]
      }
    </FlexContainer>
  ) : null;
};

export default App;

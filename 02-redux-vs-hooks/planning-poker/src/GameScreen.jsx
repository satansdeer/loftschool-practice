import React from "react";
import styled from 'styled-components'
import { StoriesList } from "./StoriesList";
import {Panel, Button} from "./Components"

const sizes = {
  S: "s",
  M: "m",
  L: "l"
};

const VoteButton = styled(Button)`
    margin: 0 10px;
`

const CurrentStory = styled.div`
    margin-bottom: 20px;
`

export const GameScreen = ({ stories, currentStory, vote }) => (
  <Panel>
    <h1>Game screen</h1>
    <CurrentStory>
    {
        currentStory && <div><strong>Current story:</strong> {currentStory.text}</div>
    }
    </CurrentStory>
    <>
      {Object.values(sizes).map(size => (
        <VoteButton key={size} onClick={() => vote(size, currentStory.text)}>{size}</VoteButton>
      ))}
    </>
    <StoriesList stories={stories} />
  </Panel>
);

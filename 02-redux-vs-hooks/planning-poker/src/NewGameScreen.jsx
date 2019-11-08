import React, { useCallback, useState } from "react";
import { StoriesList } from "./StoriesList";
import { Panel, InputGroup, StoryInput, Button } from "./Components";

export const NewGameScreen = ({ stories, onClick, startGame }) => {
  const [storyText, setStoryText] = useState("");

  const handleClick = useCallback(() => {
    if (
      storyText === "" ||
      !(/^[auioeAUIEOаиеёоуыэюя]+$/).test(storyText) ||
      stories.filter(story => story.text === storyText).length
    ) {
      return;
    }
    onClick(storyText);
    setStoryText("");
  }, [storyText]);

  return (
    <Panel>
      <h1>Create Stories</h1>
      <InputGroup>
        <StoryInput
          type="text"
          placeholder="Story"
          value={storyText}
          onChange={e => setStoryText(e.target.value)}
        />
        <button onClick={handleClick}>Add story</button>
      </InputGroup>
      <StoriesList stories={stories} />
      <Button onClick={startGame}>Start game</Button>
    </Panel>
  );
};

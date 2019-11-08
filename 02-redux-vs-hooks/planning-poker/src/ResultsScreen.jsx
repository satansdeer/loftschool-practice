import React, { useContext } from "react";
import { StoreContext } from "./Store";
import { StoriesList } from "./StoriesList";
import { Panel, Button } from "./Components";
import { RESET } from "./Constants";

export const ResultsScreen = () => {
  const [{ stories }, dispatch] = useContext(StoreContext);

  const startOver = () => {
    dispatch({ type: RESET });
  };

  return (
    <Panel>
      <h1>Results</h1>
      <StoriesList stories={stories} showVotes />
      <Button onClick={startOver}>Start over</Button>
    </Panel>
  );
};

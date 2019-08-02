import React, { useState } from "react";

export const Counter = () => {
  const [score, setScore] = useState(0);

  const vote = vote => {
    setScore(vote)
  };

  return (
    <>
      <h1>{score}</h1>
      <button
        id="upvote"
        className={score === 1 && "active"}
        onClick={() => vote(1)}
      >
        Upvote
      </button>
      <button
        id="downvote"
        className={score === -1 && "active"}
        onClick={() => vote(-1)}
      >
        Downvote
      </button>
    </>
  );
};

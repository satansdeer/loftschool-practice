import React, { Component } from "react";

export class Counter extends Component {
  state = { score: 0 };

  vote(vote) {
    this.setState(state => ({
      score: vote
    }));
  }

  render() {
    const { score } = this.state;
    return (
      <>
        <h1>{score}</h1>
        <button
          id="upvote"
          className={score === 1 && "active"}
          onClick={() => this.vote(1)}
        >
          Upvote
        </button>
        <button
          id="downvote"
          className={score === -1 && "active"}
          onClick={() => this.vote(-1)}
        >
          Downvote
        </button>
      </>
    );
  }
}

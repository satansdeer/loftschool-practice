export const NEW_GAME = "NEW_GAME";
export const GAME = "GAME";
export const RESULTS = "RESULTS";

export const START_GAME = "START_GAME";
export const RESET = "RESET";
export const SET_STATE = "SET_STATE";

export const ADD_STORY = "ADD_STORY";
export const VOTE = "VOTE";

export const unvoted = story => !story.votes.length

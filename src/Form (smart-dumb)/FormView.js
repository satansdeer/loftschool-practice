import React from "react";

export const FormView = ({ hints, onSumbmit }) => {
  return (
    <form onSumbmit={onSumbmit}>
      <input type="text" name="name" />
      <input type="text" name="surname" />
      {hints.map(hint => (
        <p key={hint.id}>{hint.text}</p>
      ))}
    </form>
  );
};

import React from "react";
import styled from "styled-components";

const Story = styled.li`
  background-color: #2a2e35;
  padding: 10px;
  margin-bottom: 10px;
`;

const Stories = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StoriesList = ({ stories, showVotes }) => {
  return (
    <Stories>
      {stories.map((story, index) => (
        <Story key={index}>
          {story.text} {showVotes && story.votes.join(", ")}
        </Story>
      ))}
    </Stories>
  );
};

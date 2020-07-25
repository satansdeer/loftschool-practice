import React, { useState } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import styled from "styled-components";
import "./styles.css";

const FadeDiv = styled.div`
  transition: 0.5s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
`;

const FadeTransition = ({ children, ...rest }) => (
  <Transition {...rest}>
    {state => <FadeDiv state={state}>{children}</FadeDiv>}
  </Transition>
);

const SwitchableText = ({ showBar }) => (
  <SwitchTransition mode="out-in">
    <FadeTransition
      key={showBar ? "bar" : "foo"}
      timeout={250}
      unmountOnExit
      mountOnEnter
    >
      {showBar ? <h3>Bar</h3> : <h3>Foo</h3>}
    </FadeTransition>
  </SwitchTransition>
);

export default function App() {
  const [showBar, setShowBar] = useState(false);
  return (
    <div className="App">
      <h1>Click the button to transition the text below</h1>
      <SwitchableText showBar={showBar} />
      <button onClick={() => setShowBar(!showBar)}>toggle</button>
    </div>
  );
}

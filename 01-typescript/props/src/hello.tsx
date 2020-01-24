import * as React from "react";

interface Props {
  userName: string;
  age: number;
}

export const HelloComponent = (props: Props) => (
  <h2>Hello user: {props.userName} ! You are {props.age}</h2>
);
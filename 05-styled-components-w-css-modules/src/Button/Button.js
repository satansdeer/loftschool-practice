import React from "react";
import Styles from "./Button.css";
import classnames from "classnames";

export default (props) => {
  /**
   * let's simulate css-modules
   */
  const className = classnames([
    'button',
    props.className
  ]);
  
  return (
    <button className={className}>
      <span className={'icon'}>?</span> 
      {" "}
      {props.children}
    </button>
  );
}
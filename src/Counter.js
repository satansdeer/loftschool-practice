import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    const { value, increment, decrement } = this.props;
    return (
      <p>
        Clicked: {value} times
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </p>
    );
  }
}

const mapStateToProps = state => {
  return { value: state.counter };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

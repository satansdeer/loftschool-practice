import React, { Component } from "react";

const NameField = ({ name }) => {
  return <p>{name}</p>;
};

const UserCard = ({ user }) => {
  return (
    <>
      <NameField name={user.name} />
      <button onClick={}>Click me</button>
    </>
  );
};

class ReactDataFlow extends Component {
  user = { name: "some name", age: 28 };

  render() {
    return <UserCard user={this.state.user} />;
  }
}

export default ReactDataFlow;

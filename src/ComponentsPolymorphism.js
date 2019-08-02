import React, {Component} from "react";

const Button = ({ onClick, styles }) => {
  return (
    <button onClick={onClick} styles={styles}>
      Regular button
    </button>
  );
};

// const Button = (props) => {
//   return <button {...props}>Regular button</button>;
// };

class WithPopUp extends Component {
  state = { showPopup: false };

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  render() {
    const { children } = this.props;
    const { showPopup } = this.state;

    return (
      <>
        {showPopup && <div className="popup">I'm popup</div>}
        {children(this.togglePopup)}
      </>
    );
  }
}

export const App = () => {
  return (
    <WithPopUp>
      {togglePopup => {
        return <Button onClick={togglePopup} />;
      }}
    </WithPopUp>
  );
};

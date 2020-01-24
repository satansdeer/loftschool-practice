import React from "react";
import { render } from "react-dom";
import configureStore from "./store";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

// action creator
function updateText(text) {
  return {
    type: "UPDATE",
    text
  };
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const { store, persistor } = configureStore({
  root: {
    text: "Hello world"
  }
});

class App extends React.Component {
  onUpdateText = e => {
    this.props.dispatch(updateText(e.nativeEvent.target.value));
  };

  render() {
    return (
      <PersistGate persistor={persistor}>
        <div style={styles}>
          <h2>Start editing to see some magic happen {"\u2728"}</h2>
          <input value={this.props.text} onChange={this.onUpdateText} />
        </div>
      </PersistGate>
    );
  }
}

const mapStateToProps = state => ({
  text: state.root.text
});

const ConnectedApp = connect(mapStateToProps)(App);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);

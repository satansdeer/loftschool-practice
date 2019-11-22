import React from 'react'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

class Buggy extends React.Component {
 
  state = { greeting: "Welcome"};
  componentDidMount() {
    throw new Error("An error has occured in Buggy component!");
  }
  render() {
    return <h2>{this.state.greeting}</h2>;
  }
}

class NotBuggy extends React.Component {
 
  state = { greeting: "Welcome"};
  componentDidMount() {
   
  }
  render() {
    return <h2>{this.state.greeting}</h2>;
  }
}


const App = () => (
  <div style={styles}>

    <h2>Error Boundaries Example</h2>
    <ErrorBoundary>
      <Buggy />
    </ErrorBoundary>
    
    <ErrorBoundary>
      <NotBuggy />
    </ErrorBoundary>
    
  </div>
);

export default App;
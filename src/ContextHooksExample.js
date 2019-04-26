import React, { Component, useContext } from "react";

const ThemeContext = React.createContext("");

class ContextApiProviderExample extends Component {
  state = { theme: "light" };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === "light" ? "dark" : "light"
    }));
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        <Button />
      </ThemeContext.Provider>
    );
  }
}

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#666" : "#eee"
      }}
    >
      Кнопка с темой
    </button>
  );
};

export default ContextApiProviderExample;

import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    const name = "John Doe";
    const foo = () => "BAR";
    return (
      <div className="App">
        <h1>Hello {foo()}</h1>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import "./App.css";

class App extends Component {
  state = {
    totalItems: 0
  };

  updateTotalItemCount = newTotalItems => {
    this.setState({ totalItems: newTotalItems });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalItems={this.state.totalItems}
          onUpdateTotal={this.updateTotalItemCount}
        />
        <Main
          totalItems={this.state.totalItems}
          onUpdateTotal={this.updateTotalItemCount}
        />
      </React.Fragment>
    );
  }
}

export default App;

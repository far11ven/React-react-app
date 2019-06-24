import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    totalItems: 0,
    counters: [{ id: 0, value: 0 }]
  };

  handleIncrement = counter => {
    console.log("clicked increment button");
    const countersNew = [...this.state.counters];
    const index = countersNew.indexOf(counter);

    countersNew[index] = { ...counter };

    ++countersNew[index].value;

    console.log("countersNew[index] :", countersNew[index]);

    this.setState({ counters: countersNew });
    this.updateTotalItems();
  };

  handleDecrement = counter => {
    console.log("clicked decrement button");

    const countersNew = [...this.state.counters];
    const index = countersNew.indexOf(counter);

    countersNew[index] = { ...counter };

    if (countersNew[index].value > 0) {
      --countersNew[index].value;
      this.setState({ counters: countersNew });
    }
    this.updateTotalItems();
  };

  handleAdd = () => {
    console.log("clicked ADD button");

    var countersNew = this.state.counters.slice();

    if (this.state.counters.length > 0) {
      countersNew.push({
        id: this.state.counters[this.state.counters.length - 1].id + 1,
        value: 0
      });
    } else {
      countersNew.push({ id: 0, value: 0 });
    }
    this.setState({ counters: countersNew });
    this.updateTotalItems();
  };

  handleReset = () => {
    console.log("clicked RESET button");
    const countersNew = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: countersNew });
    this.updateTotalItems();
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    this.updateTotalItems();
  };

  handleNavigate = counter => {
    this.props.history.push({
      state: { detail: "Hello" }
    });

    console.log("Saving data in history", this.props.history);
  };

  updateTotalItems = () => {
    let i = 0;
    this.state.counters.filter(c => {
      i += c.value;
      console.log("i", c.value);
    });
    console.log("final i", i);
    this.setState({ totalItems: i });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.totalItems} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onAdd={this.handleAdd}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onNavigate={this.handleNavigate}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

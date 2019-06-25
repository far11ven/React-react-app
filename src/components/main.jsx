import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Counters from "./counters";
import Counter from "./counter";
import Cart from "./cart";

class Main extends Component {
  state = {
    totalItems: 0,
    selectedCounterId: undefined,
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
    // this.props.history.push({
    //   state: { detail: "Hello" }
    // });

    // console.log("Saving data in history", this.props.history);

    let counterId = counter.id;

    this.setState({ selectedCounterId: counterId });
  };

  updateTotalItems = () => {
    let i = 0;
    this.state.counters.filter(c => {
      i += c.value;
      console.log("i", c.value);
      return i;
    });
    console.log("final i", i);
    this.setState({ totalItems: i });

    this.props.onUpdateTotal(this.state.totalItems); // updates value in Navbar via App Component
    localStorage.setItem("state", JSON.stringify(this.state));
  };

  componentDidMount() {
    this.setState({ selectedCounterId: undefined }); //reset selected item
  }

  render() {
    const isitemclicked =
      this.state.selectedCounterId !== undefined ? true : false;

    let content;

    console.log("Before Passing Counters:", this.state.counters);

    if (this.props.location.pathname === "/") {
      var min = 1;
      var max = 100;
      var rand_id = min + Math.random() * (max - min);
      content = (
        <div>
          <h1>You've reached home</h1>
          <img
            src={"https://picsum.photos/id/" + Math.floor(rand_id) + "/800/400"}
          />
        </div>
      );
    } else if (this.props.location.pathname === "/cart") {
      content = <Cart />;
    } else if (this.props.location.pathname === "/items") {
      if (!isitemclicked) {
        console.log(" 1 Item displayed");
        content = (
          <Counters
            counters={this.state.counters}
            onAdd={this.handleAdd}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onNavigate={this.handleNavigate}
          />
        );
      }
    } else if (this.props.location.pathname.includes("/items/")) {
      if (isitemclicked) {
        content = this.state.counters
          .filter(c => c.id === this.state.selectedCounterId)
          .map(counter => {
            return (
              <Counter
                key={counter.id}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onNavigate={this.handleNavigate}
                counter={counter}
              />
            );
          });
      }
    }

    return (
      <React.Fragment>
        <main className="container" isitemclicked={isitemclicked}>
          {content}
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(Main);

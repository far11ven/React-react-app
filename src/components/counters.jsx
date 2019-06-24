import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onAdd}
          className="btn btn-primary btn-sm m-2"
        >
          Add Item
        </button>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          RESET Qt.
        </button>
        <div className="item-body">
          {this.props.counters.map(counter => (
            <Counter
              key={counter.id}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
              onNavigate={this.props.onNavigate}
              counter={counter}
            >
              <h4> Item #{counter.id}</h4>
            </Counter>
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;

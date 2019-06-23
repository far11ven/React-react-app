import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  

  render() {
    return (
      <div>
        <button onClick = {this.props.onAdd} className="btn btn-primary btn-sm m-2"> Add </button>  
        <button onClick = {this.props.onReset} className="btn btn-primary btn-sm m-2"> RESET </button>  
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            counter={counter}
          >
            <h4> Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

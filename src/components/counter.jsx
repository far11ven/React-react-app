import React, { Component } from "react";
import { Link } from "react-router-dom";

class Counter extends Component {
  state = {
    //value: this.props.counter.value,
    imageUrl: "https://picsum.photos/id/"
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    console.log(" Selected Counter", this.props.counter);
    return (
      <React.Fragment>
        <div className="container">
          <Link
            to={"/items/" + this.props.counter.id}
            onClick={() => this.props.onNavigate(this.props.counter)}
          >
            <div>
              <img
                alt=""
                src={
                  this.state.imageUrl +
                  (this.props.counter.id + 100) +
                  "/300/150"
                }
              />
            </div>
          </Link>

          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>

          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.props.counter.value}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
          <Link
            to={"/items/" + this.props.counter.id}
            onClick={() => this.props.onNavigate(this.props.counter)}
          >
            <div>{this.props.children}</div>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;

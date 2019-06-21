import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200/300",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  handleIncrement = () => {
    console.log("clicked increment button", this);

    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    console.log("clicked decrement button", this);

    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  getBadgeClasses() {
    let classes = "badge m-7 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.state.value}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>

        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}> {tag} </li>
          ))}
        </ul>
        <img src={this.state.imageUrl} alt="" />
      </React.Fragment>
    );
  }
}

export default Counter;

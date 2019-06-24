import React, { Component } from "react";
import NavBar from "./navbar";

class CounterInfo extends Component {
  state = {
    id: Number(this.props.match.params.counterId),
    imageUrl: "https://picsum.photos/id/"
  };
  componentDidMount = () => {
    var counterId = this.props.match.params.counterId; //from the path '/author:id'
    console.log(this.props);
    console.log("this.props.location.state.", this.props.location);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <h3>Info: Item #{this.state.id}</h3>
          <img
            alt=""
            src={this.state.imageUrl + (this.state.id + 100) + "/1200/600"}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default CounterInfo;

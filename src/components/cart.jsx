import React, { Component } from "react";

class Cart extends Component {
  state = {
    imageUrl: "https://picsum.photos/id/"
  };

  render() {
    console.log("counter :", JSON.parse(localStorage.getItem("state")));

    let savedState = JSON.parse(localStorage.getItem("state"));
    let content;

    if (savedState !== null && savedState.totalItems > 0) {
      content = (
        <div className="item-body">
          {savedState.counters
            .filter(c => c.value > 0)
            .map(counter => (
              <div
                className="item col-md-12"
                style={{ display: "flex", margin: 20 }}
              >
                <h2>Item #{counter.id} </h2>
                <div className="col-md-8" style={{ float: "left" }}>
                  <img
                    alt=""
                    src={this.state.imageUrl + (counter.id + 100) + "/600/300"}
                  />
                </div>
                <h1 style={{ zIndex: 999999, float: "right" }}>
                  x
                  <span className="badge badge-pill badge-primary">
                    {" "}
                    {counter.value}
                  </span>
                </h1>
              </div>
            ))}
        </div>
      );
    } else {
      content = <h2> There are no items in the cart!! </h2>;
    }

    return (
      <React.Fragment>
        <div className="container">{content}</div>
      </React.Fragment>
    );
  }
}

export default Cart;

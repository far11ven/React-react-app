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
              <h2>
                #{counter.id} and Qt. = {counter.value}
              </h2>
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

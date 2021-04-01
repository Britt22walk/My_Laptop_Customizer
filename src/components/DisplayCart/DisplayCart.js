import React, { Component } from "react";
import DisplaySelectedFeatures from "../DisplaySelectedFeatures/DisplaySelectedFeatures";
import "./DisplayCart.css";
import Total from "../Total/Total";

class DisplayCart extends Component {
  render() {
    const { selected } = this.props;
    const summary = Object.keys(selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = selected[feature];

      return (
        <DisplaySelectedFeatures
          key={featureHash}
          feature={feature}
          cost={selectedOption.cost}
          name={selectedOption.name}
        />
      );
    });
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total selected={selected} />
      </section>
    );
  }
}

export default DisplayCart;

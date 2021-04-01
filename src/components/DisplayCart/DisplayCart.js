import React, { Component } from "react";
import DisplaySelectedFeatures from "../DisplaySelectedFeatures/DisplaySelectedFeatures";
import "./DisplayCart.css";
import Total from "../Total/Total";

class DisplayCart extends Component {
  render() {
    const { selected, cost } = this.props;
    const summary = Object.keys(selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = selected[feature];

      return (
        <DisplaySelectedFeatures
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption.name}
          cost={selectedOption.cost}
          key={selectedOption.name}
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

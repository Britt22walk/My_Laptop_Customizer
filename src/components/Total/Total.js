import React, { Component } from "react";
import { USCurrencyFormat } from "../../App";
import "./Total.css";

class Total extends Component {
  render() {
    const { selected } = this.props;
    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );
    return (
      <div className="summary_total">
        <div className="summary_total_label">Total</div>
        <div className="summary_total_value">
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    );
  }
}

export default Total;

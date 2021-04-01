import React, { Component } from "react";
import { USCurrencyFormat } from "../../App";
import "./DisplaySelectedFeatures.css";

class DisplaySelectedFeatures extends Component {
  render() {
    const { featureHash, feature, name, cost } = this.props;
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(cost)}
        </div>
      </div>
    );
  }
}

export default DisplaySelectedFeatures;

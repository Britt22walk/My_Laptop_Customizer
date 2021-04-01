import React, { Component } from "react";
import slugify from "slugify";
import { USCurrencyFormat } from "../../App";
import "./FormatFeature.css";

class FormatFeature extends Component {
  render() {
    const { selected, itemHash, feature, item, updateFeature } = this.props;
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(JSON.stringify(feature))}
          checked={item.name === selected[feature].name}
          onChange={(e) => updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  }
}

export default FormatFeature;

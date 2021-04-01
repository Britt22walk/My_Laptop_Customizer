import React, { Component } from "react";
import AllOptions from "../AllOptions/AllOptions";
import FormatFeature from "../FormatFeature/FormatFeature";
import "./CustomizeLaptopList.css";
import slugify from "slugify";

class CustomizeLaptopList extends Component {
  render() {
    const { updateFeature, selected } = this.props;
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FormatFeature
            itemHash={itemHash}
            feature={feature}
            item={item}
            selected={selected}
            updateFeature={updateFeature}
          />
        );
      });

      return (
        <AllOptions
          featureHash={featureHash}
          options={options}
          feature={feature}
          key={idx}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default CustomizeLaptopList;

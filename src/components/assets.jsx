import React, { Component } from "react";
import Asset from "./asset";

class Assets extends Component {
  render() {
    return (
      <div>
        {this.props.assets.map(asset => (
          <Asset key={asset.id} asset={asset} />
        ))}
      </div>
    );
  }
}

export default Assets;

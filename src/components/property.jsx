import React, { Component } from "react";
import { Card } from "antd";

class Property extends Component {
  render() {
    return (
      <Card style={{ background: "#393E46" }}>
        <div>
          <h3 style={{ color: "white" }}>Total Value: </h3>
          <h1 style={{ color: "white" }}>￥{this.props.totalValue}</h1>
          <h3 style={{ color: "white" }}>Address: </h3>
          <h4 style={{ color: "white" }}>{this.props.address}</h4>
        </div>
      </Card>
    );
  }
}
export default Property;

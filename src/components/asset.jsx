import React, { Component } from "react";
import { Card, Icon, Row } from "antd";
import "../App.css";

class Asset extends Component {
  render() {
    return (
      <Card hoverable>
        <h3>{this.props.asset.id}</h3>
        <div>
          <h2 style={{ float: "left" }}>{this.getAmount()}</h2>
          <h2 style={{ float: "right" }}>￥{this.getCurValue()}</h2>
          <h4>≈￥{this.getProxiValue()}</h4>
        </div>
      </Card>
    );
  }

  getAmount() {
    var amount = this.props.asset.amount;
    amount = amount.toFixed(4);
    return amount;
  }

  getCurValue() {
    var cur = this.props.asset.curValue;
    cur = cur.toFixed(2);
    return cur;
  }

  getProxiValue() {
    var proxi = this.props.asset.amount * this.props.asset.curValue;
    proxi = proxi.toFixed(2);
    return proxi;
  }
}

export default Asset;

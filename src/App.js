import React, { Component } from "react";
import Assets from "./components/assets";
import Property from "./components/property";

class App extends Component {
  state = {
    address: "3J7xrxHKZKqarEexTNCyUQo56KfzoSR7bb",
    assets: [
      {
        id: "ETH",
        amount: 21.2311,
        curValue: 24329.54
      },
      {
        id: "EOS",
        amount: 99.4509,
        curValue: 18.08
      },
      {
        id: "BTC",
        amount: 0.0063,
        curValue: 24310.64
      }
    ]
  };

  getTotalValue() {
    const assets = [...this.state.assets];
    var i = 0,
      sum = 0;
    for (i = 0; i < assets.length; i++) {
      sum += assets[i].amount * assets[i].curValue;
    }
    sum = sum.toFixed(2);
    return sum;
  }

  render() {
    return (
      <React.Fragment>
        <Property
          address={this.state.address}
          totalValue={this.getTotalValue()}
        />
        <Assets assets={this.state.assets} />
      </React.Fragment>
    );
  }
}
export default App;

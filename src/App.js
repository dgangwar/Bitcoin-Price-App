import React, { Component } from 'react';
import './App.css';
import CoinImage from "./component/CoinImage";
import CoinDataTable from "./component/CoinDataTable";

class App extends Component {
  render() {
    return (
      <div className="coin-data-container ">
            <CoinImage/>
            <CoinDataTable/>
      </div>
    );
  }
}

export default App;

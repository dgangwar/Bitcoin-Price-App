import React, { Component } from 'react';
import bitcoinImage from '../bitcoin.jpeg';


class CoinImage extends Component {
  render() {
    return (
      <div className="coin-image">
        <img src={bitcoinImage} alt="bitcoin-logo" />
      </div>
    );
  }
}

export default CoinImage;

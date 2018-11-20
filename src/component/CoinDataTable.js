import React, { Component } from 'react';
import TrComponent from './TrComponent';

class CoinDataTable extends Component {

    state = {
        price: null
    }

    async componentDidMount(){
        const endpoint = `https://api.coindesk.com/v1/bpi/currentprice.json`;
        await this.fetchItems(endpoint);
        this.timerID = setInterval(
            () => this.fetchItems(endpoint),
            60000
        );
    }

    fetchItems = async (endpoint) => {
        let result = await fetch(endpoint);
        result = await result.json();
        this.setState({
            price: result.bpi
        });
    }

    render() {
        const {price} = this.state;

        let prices = [];
        if(price){
            prices = Object.keys(price).map(key => price[key]);
        }

        const trs = prices.map((currency, index) => {
            return (
                <TrComponent key={`tr-${index}`} code={currency.code} rate={currency.rate} />
            );
        });


        return (
            <div className="coin-data-table">
                {this.state.price ?
                <table border="1">
                    <thead>
                        <tr>
                            <td>Currency</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </table>
                    : null}
            </div>
        );
    }
}

export default CoinDataTable;

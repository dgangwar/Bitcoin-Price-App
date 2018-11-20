import React, { Component } from 'react';


class CoinDataTable extends Component {

   render() {
       const {rate, code}= this.props;
        return (
            <tr>
                <td>{code}</td>
                <td>{rate}</td>
            </tr>
        );
    }
}

export default CoinDataTable;

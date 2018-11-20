import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoinDataTable from './component/CoinDataTable'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders CoinDataTable', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CoinDataTable />, div);
    ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {compose, combineReducers, createStore } from 'redux';
import persistState from 'redux-localstorage';
import cartReducer from './reducers/cart';
import productsReducer from './reducers/products';
import App from './App';
import productsData from './data/products';
import 'bootstrap/dist/css/bootstrap.css';

const enhancer = compose(
  persistState()
)
const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData // initial store values
    },
    enhancer
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

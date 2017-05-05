import React, { PropTypes } from 'react';

const CartItem = ({ name, totalPrice, currency, count, brand }) => {
    return (
        <div className="cart-item">
          <span className="cart-item__name">Item:{brand}   {name}</span>
          <span className="cart-item__price">Quantity:{count}        Price:{totalPrice.toFixed(2)}   {currency}</span>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default CartItem;

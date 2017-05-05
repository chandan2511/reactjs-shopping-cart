import React, { Component, PropTypes } from 'react';
import AddProduct from './AddProduct';

class Product extends Component {
    handleClick = (add) => {
        const { id, addToCart, removeFromCartSingle } = this.props;

        if (!add) {
            removeFromCartSingle(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const {id, name, price, items, currency, image, isInCart, brand, packSize } = this.props;

        return (
            <div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <div>{brand}</div>
                    <h3>
                        {name}
                    </h3>
                    <div>{packSize}</div>
                    <div className="product__price">{price} {currency}</div>
                    <AddProduct isInCart={isInCart} id={id} items={items} onclick={this.handleClick} />
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    items: PropTypes.array,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    packSize: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCartSingle: PropTypes.func.isRequired
}

export default Product;

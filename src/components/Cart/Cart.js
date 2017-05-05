import React, { PropTypes } from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id){
        this.props.removeFromCart(id);
    }
    render(){
        const {items,total,currency,itemsList}=this.props;
        console.log(itemsList);
        const itemCount = itemsList.reduce(function(acc, val) {
                                        return acc + 1;
                                    }, 0);
        
        return (
        <div>
            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <h3 className="panel-title">Your Cart Summary</h3>
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Items:{itemCount}  Total: {total.toFixed(2)} {currency}</div>
                    </div>
                    <div className="panel-body">
                        {items.length > 0 && (
                            <ul>
                                {items.map(item => (
                                  <li key={item.id}>
                                    <CartItem {...item} /><button className="btn btn-danger" onClick={()=>this.handleClick(item.id)}>Remove</button>
                                  </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;

import { connect } from 'react-redux';
import Product from '../components/Product';
import { addToCart, isInCart, removeFromCartSingle, getItemsList } from '../reducers/cart';

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props),
        items: getItemsList(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCartSingle: (id) => dispatch(removeFromCartSingle(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);

import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getCurrency, getTotal, removeFromCart,getItemsList } from '../reducers/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        itemsList: getItemsList(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props)
    }
}
const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart);

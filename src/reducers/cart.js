import { getProduct } from '../reducers/products';

// actions
const CART_ADD   = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';
const CART_SINGLE_REMOVE = 'cart/SINGLEREMOVE';

// reducer
const initialState = {
    items: [], // array of product ids
    currency: 'Rs'
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        case CART_SINGLE_REMOVE:
            return handleCartSingleRemove(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) {
    return {
        ...state,
        items: [ ...state.items, payload.productId ]
    };
}
function handleCartSingleRemove(state, payload){
    const itemIndex = state.items.indexOf(payload.productId);
    return {
        ...state,
        items: [...state.items.slice(0,itemIndex),
        ...state.items.slice(itemIndex+1)]
    };
}
function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId)
    };
}

// action creators
export function addToCart(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}
export function removeFromCartSingle(productId) {
    return {
        type: CART_SINGLE_REMOVE,
        payload: {
            productId
        }
    }
}

// selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    const itemLength = state.cart.items.length;
    const items=[];
    for(let i=0;i<itemLength;i++){
        const id=state.cart.items[i];
        const product = getProduct(state,{id});
        let found = false;
        for(let j = 0; j < items.length; j++) {
            if (items[j].id === product.id) {
                items[j].count+=1;
                items[j].totalPrice+=product.price;
                found=true;
                break;
            }
        }
        if(!found){
            product.count=1;
            product.totalPrice=product.price;
            items.push(product);
        }
    }
    return items;
}

export function getCurrency(state, props) {
    return state.cart.currency;
}
export function getItemsList(state, props) {
    return state.cart.items;
}

export function getTotal(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        return acc + parseFloat(item.price);
    }, 0);
}

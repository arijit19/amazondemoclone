import * as actionType from '../actions/actionTypes';
import {updateObject} from '../../shared/Utility';

const initialState = {
    basket:[],
    orders:[],
    showModal: false,
    // ordersRecieved: false
};

const addToBasket = (state, action) => {
    let updateBasket
    if(state.basket.length > 0 && state.basket.some(elem => elem.id === action.item.id)) {
        updateBasket = state.basket.map((item) => 
        ((item.id === action.item.id) ? updateObject(item, {quantity: item.quantity +1}) : item));
    }
    else if(state.basket.length === 0 || !state.basket.some(elem => elem.id === action.item.id)){
        updateBasket = [
            ...state.basket,
            action.item
        ]
    }
    return updateObject(state,{basket: updateBasket})
};

const removeFromBasket = (state, action) => {
    const updateBasket = state.basket.filter((item)=>(item.id !== action.id))
    return updateObject(state,{basket: updateBasket})
}

const incrementQty = (state, action) => {
   const updateBasket = state.basket.map((item) => 
        ((item.id === action.id) ? updateObject(item, {quantity: item.quantity +1}) : item));
    return updateObject(state,{basket: updateBasket})
}

const decrementQty = (state, action) => {
    const updateBasket = state.basket.map((item) => 
         ((item.id === action.id) ? updateObject(item, {quantity: item.quantity -1}) : item));
     return updateObject(state,{basket: updateBasket})
 }

const showModal = (state, action) => {
    return updateObject(state,{showModal: action.showModal})
}

const emptyBasket = (state, action) => {
    return updateObject(state,{basket: []})
}

const addOrder = (state, action) => {
    return updateObject(state,{orders: [
        ...state.orders,
        action.order
    ]})
}


const reducer = (state = initialState, action)=> {
    switch(action.type) {
        case actionType.ADD_TO_BASKET: return addToBasket(state, action);
        case actionType.REMOVE_ALL_ITEMS: return removeFromBasket(state, action);
        case actionType.INCREMENT_QUANTITY: return incrementQty(state, action);
        case actionType.DECREMENT_QUANTITY: return decrementQty(state, action);
        case actionType.SHOW_MODAL: return showModal(state, action);
        case actionType.EMPTY_BASKET: return emptyBasket(state, action);
        case actionType.ADD_ORDER: return addOrder(state, action);
        default: return state;
    }
}

export default reducer;
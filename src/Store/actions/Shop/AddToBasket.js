import * as actionType from '../actionTypes';

export const addToBasket = (item) => {
    return {
        type: actionType.ADD_TO_BASKET,
        item:item
    }
}


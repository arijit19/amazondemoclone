import * as actionType from '../actionTypes';

export const removeFromBasket = (id) => {
    return {
        type: actionType.REMOVE_ALL_ITEMS,
        id:id
    }
}
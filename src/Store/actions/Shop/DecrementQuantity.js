import * as actionType from '../actionTypes';

export const DecrementQuantity = (id) => {
    return {
        type: actionType.DECREMENT_QUANTITY,
        id:id
    }
}
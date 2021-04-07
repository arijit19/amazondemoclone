import * as actionType from '../actionTypes';

export const IncrementQuantity = (id) => {
    return {
        type: actionType.INCREMENT_QUANTITY,
        id:id
    }
}
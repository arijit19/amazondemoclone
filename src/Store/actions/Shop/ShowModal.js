import * as actionType from '../actionTypes';

export const showModal = (flag) => {
    return {
        type: actionType.SHOW_MODAL,
        showModal:flag
    }
}
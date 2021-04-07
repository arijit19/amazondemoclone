import * as actionType from '../actionTypes';
import {firestoreDB} from "../../../firebase/firebase";

export const addOrder = (order) => {
    return {
        type: actionType.ADD_ORDER,
        order:order
    }
}

export const addOrderDatabase = (uid, order)=> {
    return dispatch => {
        firestoreDB
            .collection('users')
            .doc(uid)
            .collection('orders')
            .doc(order.id)
            .set(order)
    }
}

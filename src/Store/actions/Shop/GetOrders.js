import * as actionType from '../actionTypes';
import {firestoreDB} from "../../../firebase/firebase";

export const addOrder = (order) => {
    return {
        type: actionType.ADD_ORDER,
        order:order
    }
}

export const getOrdersDatabase = (uid)=> {
    return dispatch => {
        firestoreDB
            .collection('users')
            .doc(uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapShot => {
                snapShot.docChanges().forEach( change => {
                    if (change.type === "added") {
                        let order = {
                            ...change.doc.data()
                        }
                        dispatch(addOrder(order))
                    }
                    if (change.type === "modified") {
                    }
                    if (change.type === "removed") {
                    }
        
                })
           })
    }
}

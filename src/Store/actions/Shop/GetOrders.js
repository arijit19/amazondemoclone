import * as actionType from '../actionTypes';
import {firestoreDB} from "../../../firebase/firebase";

export const getOrder = (orders) => {
    return {
        type: actionType.GET_ORDER,
        orders:orders
    }
}

// export const OrderRecieved = ()=> {
//     return {
//         type: actionType.ORDERS_RECIEVED
//     }
// }

export const getOrdersDatabase = (uid)=> {
    return dispatch => {
        let orders = [];
        firestoreDB
            .collection('users')
            .doc(uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapShot => {
                snapShot.docChanges().forEach( change => {
                    if (change.type === "added") {
                        
                        snapShot.docs.map( doc => orders.push({
                            ...doc.data()
                        }))
                        
                    }
                    if (change.type === "modified") {
                        // console.log("Modified city: ", change.doc.data());
                    }
                    if (change.type === "removed") {
                        // console.log("Removed city: ", change.doc.data());
                    }
        
                })
                dispatch(getOrder(orders));
                // dispatch(OrderRecieved());
           })
    }
}

import {firestoreDB} from "../../../firebase/firebase";



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

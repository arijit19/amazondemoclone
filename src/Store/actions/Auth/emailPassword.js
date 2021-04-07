import {firebase} from "../../../firebase/firebase";
import { signIn,startLoading , endLoading, failedAuth} from "./Auth";
import { fetchUserFullNameDatabase, saveUser} from "./User";
import store from "../../../Store/Store";

export const signInemailPassword = (email, password) => {
    return dispatch => {
        let toLoad =store.getState().auth.loading
        !toLoad &&  dispatch(startLoading());
        
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(data=>{
            const usr = {
                uid: data.user.uid, 
                refreshToken: data.user.refreshToken, 
                email: email, 
                photoURL: data.user.photoURL, 
                fullName: store.getState().auth.fullName ? store.getState().auth.fullName : ""
            }
            dispatch(signIn(usr));
            dispatch(fetchUserFullNameDatabase(data.user.uid));
            toLoad = store.getState().auth.loading
            toLoad &&  dispatch(endLoading());
           
        })
        .catch(err => {
            toLoad = store.getState().auth.loading
            toLoad &&  dispatch(endLoading());
            const errMsg = `[${err.catch}] : ${err.message}`;
            dispatch(failedAuth(errMsg));
        })
    }
}

export const signUpemailPassword = (email, password, fullName) => {
    return dispatch => {
        let toLoad = store.getState().auth.loading
        !toLoad &&  dispatch(startLoading());
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(data=>{
            const usr = {
                uid: data.user.uid, 
                refreshToken: data.user.refreshToken, 
                email: email, 
                photoURL: data.user.photoURL, 
                fullName: fullName
            }
            dispatch(signIn(usr));
            dispatch(saveUser({
                email: email, 
                photoURL: data.user.refreshToken, 
                fullName: fullName
            }, data.user.uid))
            
        })
        .catch(err => {
            toLoad = store.getState().auth.loading
            toLoad &&  dispatch(endLoading());
            const errMsg = `[${err.code}] : ${err.message}`;
            dispatch(failedAuth(errMsg));
        })
    }
}



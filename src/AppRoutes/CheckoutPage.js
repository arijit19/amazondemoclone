import {connect} from 'react-redux';
import { Fragment } from 'react';

import * as actionTypes from "../Store/actions/index";
import Checkout from "../components/Checkout/Checkout";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Modal from "../components/Modal/Modal";


const CheckoutPage = (props)=>(
    <Fragment>
        <Modal show={props.modalVisibility} modalClosed={()=>props.closeModal(false)}><h1>{"Please SignIn to proceed to checkout"}</h1></Modal> 
        <NavigationBar/>
        <Checkout/>
    </Fragment>
)

const mapStateToProps = (state)=> {
    return {
        modalVisibility: state.shop.showModal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: (visibility)=> dispatch(actionTypes.showModal(visibility))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);

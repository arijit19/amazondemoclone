import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actionTypes from "../../Store/actions/index";
import Order from '../Order/Order';
import styles from "./orders.module.css";

class Orders extends Component {

    componentDidMount() {
        this.props.uid  && this.props.getOrder(this.props.uid);
    }

    componentDidUpdate() {
        (this.props.uid && this.props.orders.length <= 0) && this.props.getOrder(this.props.uid);
    }
   
    render(){
        return(
            <div className={styles.wrapper}>
                <h1> Your Orders</h1>
                <div>
                { (this.props.uid &&this.props.orders.length>0) && this.props.orders.map((item,index)=> (
                    <Order  
                        key={index}
                        id={item.id}
                        created={item.created}
                        basket={item.basket}
                        amount={item.amount}
                        currency={item.currency}
                        status={item.status}
                    />
                ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        uid: state.auth.uid,
        orders: state.shop.orders ? state.shop.orders : [],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getOrder: (uid)=> dispatch(actionTypes.getOrdersDatabase(uid))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Orders);

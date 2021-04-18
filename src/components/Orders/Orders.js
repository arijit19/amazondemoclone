import {connect} from 'react-redux';

import Order from '../Order/Order';
import styles from "./orders.module.css";

const Orders = (props)=>(
    <div className={styles.wrapper}>
        <h1> Your Orders</h1>
        <div>
        { (props.uid &&props.orders.length>0) && props.orders.map((item,index)=> (
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

const mapStateToProps = (state)=> {
    return {
        uid: state.auth.uid,
        orders: state.shop.orders ? state.shop.orders : [],
    };
};

export default  connect(mapStateToProps)(Orders);

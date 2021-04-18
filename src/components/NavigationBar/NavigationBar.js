import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import {MdShoppingBasket} from 'react-icons/md';

import NavOptions from '../NavOptions/NavOptions';
import styles from "./navigationBar.module.css";
import { basketCount } from '../../Store/selectors/basketCount';
import * as actionTypes from "../../Store/actions/index";

class NavigationBar extends Component {
    componentDidMount(){
        this.props.uid  && this.props.getOrder(this.props.uid);
    }
    componentDidUpdate() {
        (this.props.uid && this.props.orders.length <= 0) && this.props.getOrder(this.props.uid);
    }
    render(){
        return (
            <header className={styles.container}>
               <Link to="/" >
                    <img 
                    className={styles.logo}
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="logo"/>
               </Link>
                <div className={styles.search}>
                    <input type="text" className={styles.input}/>
                    <BsSearch className={styles.icon}/>
                </div>
                <NavOptions/>
                <Link to="/checkout" >
                    <div className={styles.basketWrapper}>
                        <MdShoppingBasket className={styles.basketIcon}/>
                        <span className={styles.count}>{this.props.basketLen}</span>
                    </div>
                </Link>
                
            </header>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        basketLen: basketCount(state.shop.basket),
        uid: state.auth.uid,
        orders: state.shop.orders ? state.shop.orders : []
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getOrder: (uid)=> dispatch(actionTypes.getOrdersDatabase(uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
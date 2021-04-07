import CurrencyFormat from "react-currency-format";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { basketCount } from "../../Store/selectors/basketCount";
import { totalPrice } from "../../Store/selectors/totalPrice";
import * as actionTypes from "../../Store/actions/index";
import styles from "./subtotal.module.css";

const Subtotal = (props)=>{
    const checkoutHandler = ()=>{
        if(props.isAuth) {
            props.history.push('/payment');
        }
        else {
            props.openModal(true);
        }
    }
    return(
        <div className={styles.container}>
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({props.basketLen} items): <strong>{value}</strong>
                        </p>
                        <small className={styles.giftWrapper}>
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={props.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={checkoutHandler} disabled={props.basketLen > 0 ? false : true}>Procede to Checkout</button>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        basketLen: basketCount(state.shop.basket),
        price: totalPrice(state.shop.basket),
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (visibility)=> dispatch(actionTypes.showModal(visibility))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Subtotal));


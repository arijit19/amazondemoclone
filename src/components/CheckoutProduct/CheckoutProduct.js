import {connect} from 'react-redux';

import * as actions from "../../Store/actions/index";
import styles from "./checkoutProducts.module.css";

const CheckoutProduct = (props)=> {
    const decrementQty = ()=>{
        props.qty > 1 && props.decQty(props.id);
    }
    return(
        <div className={styles.container}>
            <img className={styles.image} src={props.image} alt="Prod"/>
            <div className={styles.infoWrapper}>
                <p className={styles.title}>{props.title}</p>
                <p>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className={styles.ratingWrapper}>
                    {
                        Array(props.rating)
                        .fill()
                        .map((_,i)=>(
                            <p key={i}>⭐</p>
                        ))
                    }
                </div>
                {
                    !props.isReview && 
                    <div className={styles.buttonWrapper}>
                        <div className={styles.qtyWrapper}>
                            <p>Qty</p>  
                            <button onClick={()=>(props.incQty(props.id))}>+</button>
                            <span>{props.qty}</span>
                            <button onClick={decrementQty}>-</button>
                        </div>
                        <button onClick={()=>(props.removeItem(props.id))}>Remove from Basket</button>
                    </div>
                }
                {
                    props.isReview && 
                    <div className={styles.buttonWrapper}>
                        <div className={styles.qtyWrapper}>
                            <p>Qty </p>  
                            <span className={styles.qtyBox}>{props.qty}</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {

    return {
        removeItem: (id)=> (dispatch(actions.removeFromBasket(id))),
        incQty: (id)=> (dispatch(actions.IncrementQuantity(id))),
        decQty: (id)=> (dispatch(actions.DecrementQuantity(id))),
    }
}
export default connect(null,mapDispatchToProps)(CheckoutProduct);
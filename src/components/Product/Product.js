import {connect} from 'react-redux';

import * as actionTypes from "../../Store/actions/index";
import styles from "./product.module.css";

//{title,rating,image,price}
const Product = (props)=>{
    const addBasketHandler = ()=> {
        const item = {
            title: props.title,
            rating: props.rating,
            image: props.image,
            price: props.price,
            quantity:1,
            id:props.id
        }
        props.addToBasket(item);
    }
    return(
        <div className={styles.container}>
            <div className={styles.infoWrapper}>
                <p>{props.title}</p>
                <p className={styles.price}>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className={styles.rating}>
                    {Array(props.rating).fill().map((_,i)=>(
                        <p key={i}>⭐</p>
                    ))}
                </div>
            </div>
            <img src={props.image} alt="Prod"/>
            <button onClick={()=> addBasketHandler()}> Add to basket </button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToBasket: (item)=> dispatch(actionTypes.addToBasket(item))
    }
}

export default connect(null,mapDispatchToProps) (Product);
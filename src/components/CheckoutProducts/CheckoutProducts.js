import {connect} from 'react-redux';
import React, { Fragment } from 'react'


// import * as actionTypes from "../../Store/actions/index";
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';

const CheckoutProducts = (props)=>(
    <Fragment>
        {props.basket.length>0 && props.basket.map((item,index)=>(
            <CheckoutProduct 
                key={index}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                id={item.id}
                qty={item.quantity}
                isReview={props.isReview}
            />
        ))}
    </Fragment>
)

const mapStateToProps = (state)=> {
    return {
        basket: state.shop.basket
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setStartDate: (startDate)=> dispatch(actionTypes.setstartDate(startDate)),
//         setEndDate: (endDate)=> dispatch(actionTypes.setEndDate(endDate))
//     }
// }

export default connect(mapStateToProps) (CheckoutProducts);
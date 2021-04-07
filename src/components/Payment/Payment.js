import {connect} from 'react-redux';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {CardElement, ElementsConsumer} from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import {withRouter} from 'react-router-dom';

import * as actionTypes from "../../Store/actions/index";
import { basketCount } from '../../Store/selectors/basketCount';
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts';
import styles from "./payment.module.css";
import { totalPrice } from '../../Store/selectors/totalPrice';
import axios from "../../shared/axios";

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
          color: "#303238",
          fontSize: "16px",
          fontFamily: "sans-serif",
          fontSmoothing: "antialiased",
          "::placeholder": {
            color: "#CFD7DF"
          }
        },
        invalid: {
          color: "#e5424d",
          ":focus": {
            color: "#303238"
          }
        }
      }
    };

class Payment extends Component {
   
    state = {
      error: null,
      paymentMethod: null,
      processing: false,
      clientSecret: true
    }
    getClientSecret = async () => {
      try{
        const response = await axios({
        method: 'post',
        url: `/payment/create?total=${this.props.price * 100}`
        })
        this.setState({clientSecret: response.data.clientSecret})
      }
      catch(err){
        alert(err)
      }
    }

    componentDidMount() {
      this.getClientSecret();
    }

    handlePaySubmit = async (event) => {
      event.preventDefault();
  
      const {stripe, elements} = this.props;
  
      if (!stripe || !elements) {
        return;
      }
      if (this.state.error) {
        elements.getElement("card").focus();
        return;
      }

      this.setState({processing: true})
      const cardElement = elements.getElement(CardElement);
  
      try {
        const payload = await stripe.confirmCardPayment(this.state.clientSecret, {
          payment_method: {
            type: 'card',
            card: cardElement
          }
        })
        this.setState({processing: false})
        
        const order = {
          id: payload.paymentIntent.id,
          created: payload.paymentIntent.created,
          amount: payload.paymentIntent.amount,
          currency: payload.paymentIntent.currency,
          status: payload.paymentIntent.status,
          basket: this.props.basket
        }

        this.props.addOrder(this.props.uid, order)
        //save payload

        this.props.emptyBasket();
        this.props.history.replace('/orders');
      }
      catch(err){
        alert(err);
      }
    };

    handlePayElementChangle = event => {
      
    }

    render() {
      const {stripe} = this.props;
      return (
        <div className={styles.wrapper}>
            <div className={styles.paymentContainer}>
                <h1> 
                    Checkout (
                    <Link to="/checkout" style={{textDecoration: 'none'}}>{this.props.basketLen} items</Link> )
                </h1>
                <div className={styles.paymentSection}>
                    <div className={styles.paymentTitle}>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className={styles.paymentAddress}>
                        <p>{this.props.fullName}</p>
                        <p>{this.props.email}</p>
                        <p>879, React Lane</p>
                        <p>Hyderabad, India</p>
                    </div>
                </div>
                <div className={styles.paymentSection}>
                    <div className={styles.paymentTitle}>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className={styles.paymentItems}>
                        <CheckoutProducts isReview={true}/>
                    </div>
                </div>
    
                <div className={styles.paymentSection}>
                    <div className={styles.paymentTitle}>
                        <h3>Payment method</h3>
                    </div>
                    <div className={styles.paymentDetails}>
                      <form onSubmit={this.handlePaySubmit}>
                        <CardElement options={CARD_ELEMENT_OPTIONS} onChange={this.handlePayElementChangle}/>
                        <div className={styles.paymentContainer}>
                          <CurrencyFormat
                              renderText={(value)=>(
                                <h3 className={styles.totalPayment}>
                                  Order Total : <strong>{value}</strong>
                                </h3>
                              )}
                              decimalScale={2}
                              value={this.props.price}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$"}
                            />
                            <button disabled={!stripe || this.state.processing}>{this.state.processing ? "Processing..." : "Pay"}</button>
                        </div>
                        {this.state.error && <div>{this.state.error}</div>}
                      </form>
                    </div>
                </div>
    
            </div>
        </div>
      )
    }
}

const mapStateToProps = (state)=> {
    return {
        fullName: state.auth.fullName,
        email: state.auth.email,
        basketLen: basketCount(state.shop.basket),
        price: totalPrice(state.shop.basket),
        uid: state.auth.uid,
        basket: state.shop.basket
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        emptyBasket: ()=> dispatch(actionTypes.emptyBasket()),
        addOrder: (uid, order)=> dispatch(actionTypes.addOrderDatabase(uid, order))
    }
}


const InjectedPayment = (props) => {
  return (
    <ElementsConsumer>
      {({elements, stripe}) => (
        <Payment elements={elements} stripe={stripe} {...props} />
      )}
    </ElementsConsumer>
  );
};

export default  connect(mapStateToProps,mapDispatchToProps)(withRouter(InjectedPayment));
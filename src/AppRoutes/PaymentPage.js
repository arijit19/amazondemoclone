import { Fragment } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js/';

import Payment from '../components/Payment/Payment';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const PaymentPage = ()=>(
    <Fragment>
        <Elements stripe={stripePromise}>
            <Payment/>
        </Elements>
    </Fragment>
)
export default PaymentPage;


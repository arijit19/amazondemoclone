import { Fragment } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js/';

import NavigationBar from '../components/NavigationBar/NavigationBar';
import Payment from '../components/Payment/Payment';

const stripePromise = loadStripe("pk_test_Tgfncb8ooUWUkZc6AVaA8ErZ00bZaYgxzQ");
const PaymentPage = ()=>(
    <Fragment>
        <NavigationBar/>
        <Elements stripe={stripePromise}>
            <Payment/>
        </Elements>
    </Fragment>
)
export default PaymentPage;


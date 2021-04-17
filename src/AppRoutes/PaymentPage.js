import { Fragment } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js/';

import NavigationBar from '../components/NavigationBar/NavigationBar';
import Payment from '../components/Payment/Payment';
import Footer from '../components/Footer/Footer';

const stripePromise = loadStripe("pk_test_Tgfncb8ooUWUkZc6AVaA8ErZ00bZaYgxzQ");
const PaymentPage = ()=>(
    <Fragment>
        <NavigationBar/>
        <Elements stripe={stripePromise}>
            <Payment/>
        </Elements>
        <Footer/>
    </Fragment>
)
export default PaymentPage;


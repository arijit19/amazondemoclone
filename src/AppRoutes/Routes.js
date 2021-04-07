import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Auth from '../components/Auth/Auth';
import CheckoutPage from './CheckoutPage';
import HomePage from './HomePage';
import SignOut from '../components/SignOut/SignOut';
import PaymentPage from './PaymentPage';
import OrdersPage from './OrdersPage';

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route path='/orders' exact >
                    <OrdersPage/>
                </Route>
                <Route path='/checkout' exact >
                    <CheckoutPage/>
                </Route>
                <Route path='/auth' exact >
                    {props.isAuth ? <Redirect to='/' /> : <Auth/>}
                </Route>
                <Route path='/signout' exact >
                    <SignOut/>
                </Route>
                <Route path='/payment' exact >
                    <PaymentPage/>
                </Route>
                <Route path='/' exact >
                    <HomePage/> 
                </Route>
            </Switch>
        </Router>
    );
}

const mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.isAuth
    };
};


export default connect(mapStateToProps)(Routes);
